/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Managing restaurant
// creates a restaurant
function addRestaurant(){
	var address = {
		'Street' : 			document.getElementById('address').value,
		'City' : 				document.getElementById('city').value,
		'State' : 				document.getElementById('state').value,
		'Country' : 			document.getElementById('country').value,
		'ZipCode' : 			document.getElementById('zipCode').value,
	};

	var info = JSON.stringify({
		'Name' : 				      document.getElementById("name").value,
		'Address' : 				  address,
		'Telephone' : 				  document.getElementById('phoneNumber').value,
		'ContractorUsername' :   	  getUsername()
	});

	$.ajax({
		type:"PUT",
		url: API_URL + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){
			addRestaurantToRestaurantManager(document.getElementById("name").value);

			if(document.getElementById('listRestaurantManager').value.length == 0){
				var mess = new MessageBox();
				mess.show(2,"Aucun restaurateur n'a été assigné pour le restaurant créé");
			}
			else{
				var mess = new MessageBox();
				mess.show(1,"Restaurant créé");
			}

			document.getElementById("name").value = '';
			document.getElementById('address').value= '';
			document.getElementById('city').value = '';
			document.getElementById('state').value = '';
			document.getElementById('country').value = '';
			document.getElementById('zipCode').value = '';
			document.getElementById('phoneNumber').value = '';

		}

	});
}

// Updates restaurant information
function updateRestaurant(){
	var address = {
		'Street' : 				document.getElementById('address').value,
		'City' : 				document.getElementById('city').value,
		'State' : 				document.getElementById('state').value,
		'Country' : 			document.getElementById('country').value,
		'ZipCode' : 			document.getElementById('zipCode').value,
	};

	var info = JSON.stringify({
		'Id': 					document.getElementById('listRestaurant').value, 
		'Name' : 				document.getElementById("name").value,
		'Address' : 			address,
		'Telephone' : 			document.getElementById('phoneNumber').value
	});

	$.ajax({
		type:"POST",
		url: API_URL + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Restaurant mis à jour");

			fillRestaurantList(getAllRestaurantByContractor());
			//In fact this lines empties the form because no restaurant is selected.
			fillRestaurantInfos();
		}

	});
}

// deletes a restaurant
function deleteRestaurant(){
	$.ajax({
		type:"DELETE",
		url: API_URL + 'restaurantManagers/restaurants/' + document.getElementById('listRestaurant').value,
		contentType:"application/json",
		success:function(data){
			document.getElementById('listRestaurant').value = '';
			
			var mess = new MessageBox();
			mess.show(1,"Le restaurant a été supprimé");
			fillRestaurantList(getAllRestaurantByContractor());
		}

	});
}

// fills all fields about a restaurant in the editRestaurant page.
// if no restaurant is selected, all fields are emptied
function fillRestaurantInfos(){
	var restaurantId = document.getElementById('listRestaurant').value;


	if(restaurantId.length == 0){
		document.getElementById("name").value = '';
		document.getElementById('address').value = '';
		document.getElementById('city').value = '';
		document.getElementById('state').value = '';
		document.getElementById('country').value = '';
		document.getElementById('zipCode').value = '';
		document.getElementById('phoneNumber').value = '';
	}
	else{

		var info = getRestaurantInfos(restaurantId);
		
		document.getElementById("name").value = info["Name"];
		document.getElementById('address').value = info["Address"]["Street"];
		document.getElementById('city').value = info["Address"]["City"];
		document.getElementById('state').value = info["Address"]["State"];
		document.getElementById('country').value = info["Address"]["Country"];
		document.getElementById('zipCode').value = info["Address"]["ZipCode"];
		document.getElementById('phoneNumber').value = info["Telephone"];
		
	}
}

function addRestaurantToRestaurantManager(restaurantName){
	var restaurantList = getAllRestaurantByContractor();

	var restaurantId = '';

	for (var i = 0; i < restaurantList.length; i++) {
		if(restaurantList[i]["Name"] === restaurantName){
			restaurantId = restaurantList[i]["Id"];
			break;
		}
	}

	var restaurantManagerList = getSelectedRestaurantManagerAssignedToRestaurant();

	for (var i = 0; i < restaurantManagerList.length; i++) {

		var managerInfos = getRestaurantManagerInfos(restaurantManagerList[i]);

		managerInfos["RestaurantIds"].push(restaurantId);

		updateRestaurantManager(JSON.stringify(managerInfos));
	};

}

function getSelectedRestaurantManagerAssignedToRestaurant(){
	
	var optionsArray = new Array();

	for (var i = 0; i < document.getElementById('listRestaurantManager').options.length; i++) {
		if(document.getElementById('listRestaurantManager').options[i].selected && document.getElementById('listRestaurantManager').options[i].value !== ""){
			optionsArray.push(document.getElementById('listRestaurantManager').options[i].value);
		}
	};

	return optionsArray;
}