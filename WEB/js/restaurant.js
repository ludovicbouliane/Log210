/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Managing restaurant
// creates a restaurant
function addRestaurant(){
	var info = JSON.stringify({
		'ContractorId' :   		getUserId(),
		'Name' : 				document.getElementById("name").value,
		'Address' : 			document.getElementById('address').value,
		'City' : 				document.getElementById('city').value,
		'State' : 				document.getElementById('state').value,
		'Country' : 			document.getElementById('country').value,
		'ZipCode' : 			document.getElementById('zipCode').value,
		'Telephone' : 			document.getElementById('phoneNumber').value,
		'RestaurantManagerId' : document.getElementById('listRestaurateur').value
	});

	$.ajax({
		type:"PUT",
		url: API_URL + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){

			if(document.getElementById('listRestaurateur').value.length == 0){
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
			document.getElementById('listRestaurateur').value = '';

		}

	});
}

// Updates restaurant information
function updateRestaurant(){
	var info = JSON.stringify({
		'Id': 					document.getElementById('listRestaurant').value, 
		'Name' : 				document.getElementById("name").value,
		'Address' : 			document.getElementById('address').value,
		'City' : 				document.getElementById('city').value,
		'State' : 				document.getElementById('state').value,
		'Country' : 			document.getElementById('country').value,
		'ZipCode' : 			document.getElementById('zipCode').value,
		'Telephone' : 			document.getElementById('phoneNumber').value,
		'RestaurantManagerId' : document.getElementById('listRestaurateur').value
	});

	$.ajax({
		type:"POST",
		url: API_URL + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){
			if(document.getElementById('listRestaurateur').value.length == 0){
				var mess = new MessageBox();
				mess.show(2,"Aucun restaurateur n'a été assigné pour le restaurant mis à jour");
			}
			else{
				var mess = new MessageBox();
				mess.show(1,"Restaurant mis à jour");
			}

			document.getElementById("name").value = '';
			document.getElementById('address').value = '';
			document.getElementById('city').value = '';
			document.getElementById('state').value = '';
			document.getElementById('country').value = '';
			document.getElementById('zipCode').value = '';
			document.getElementById('phoneNumber').value = '';
			document.getElementById('listRestaurateur').value = '';

			fillRestaurantList();
		}

	});
}

// deletes a restaurant
function deleteRestaurant(){
	$.ajax({
		type:"DELETE",
		url: API_URL + 'restaurants/' + document.getElementById('listRestaurant').value,
		contentType:"application/json",
		success:function(data){
			document.getElementById('listRestaurant').value = '';
			
			var mess = new MessageBox();
			mess.show(1,"Le restaurant a été supprimé");
			fillRestaurantList();
		}

	});
}

// fills a select with all restaurateur name.
//	Used in the  addRestaurant and editRestaurant pages.
function fillRestaurantManagerList(){
	var listRestaurateur = getAllRestaurantManager();

	var selectContainer = document.getElementById('listRestaurateur');

	while (selectContainer.hasChildNodes()) {
 	   selectContainer.removeChild(selectContainer.lastChild);
	}
		
	selectContainer.appendChild(addNoneOption());

	for(var i=0 ; i<listRestaurateur.length ; i++){
		var rest = listRestaurateur[i];
		
		var option = document.createElement("option");	
		option.setAttribute("value",rest["Id"]);

		var name = document.createTextNode(rest["FirstName"] + " " + rest["LastName"]);

		option.appendChild(name);	
		selectContainer.appendChild(option);
	}
}

// fills a select with all restaurant name.
//	Used in the deleteRestaurant and editRestaurant pages.
function fillRestaurantList(){
	var listRestaurateur = getAllRestaurant();

	var selectContainer = document.getElementById('listRestaurant');

	while (selectContainer.hasChildNodes()) {
 	   selectContainer.removeChild(selectContainer.lastChild);
	}
		
	selectContainer.appendChild(addNoneOption());

	for(var i=0 ; i<listRestaurateur.length ; i++){
		var rest = listRestaurateur[i];
		
		var option = document.createElement("option");	
		option.setAttribute("value",rest["Id"]);

		var name = document.createTextNode(rest["Name"]);

		option.appendChild(name);	
		selectContainer.appendChild(option);
	}
}

// fills all fields about a restaurant in the editRestaurant page.
// if no restaurant is selected, all fields are emptied
function fillRestaurantInfos(){
	var restaurantId = document.getElementById('listRestaurant').value;

	fillRestaurateurList();

	if(restaurantId.length == 0){
		document.getElementById("name").value = '';
		document.getElementById('address').value = '';
		document.getElementById('city').value = '';
		document.getElementById('state').value = '';
		document.getElementById('country').value = '';
		document.getElementById('zipCode').value = '';
		document.getElementById('phoneNumber').value = '';
		document.getElementById('listRestaurateur').value = '';
	}
	else{
		var info = getRestaurantInfos(restaurantId);

		document.getElementById("name").value = info["Name"];
		document.getElementById('address').value = info["Address"];
		document.getElementById('city').value = info["City"];
		document.getElementById('state').value = info["State"];
		document.getElementById('country').value = info["Country"];
		document.getElementById('zipCode').value = info["ZipCode"];
		document.getElementById('phoneNumber').value = info["Telephone"];
		document.getElementById('listRestaurateur').value = info["RestaurantManagerId"];
		
	}
}