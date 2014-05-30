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
		'RestaurantManagerUsername' : document.getElementById('listRestaurateur').value,
		'ContractorUsername' :   	  getUsername()
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
		'RestaurantManagerUsername' : document.getElementById('listRestaurateur').value
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

// fills all fields about a restaurant in the editRestaurant page.
// if no restaurant is selected, all fields are emptied
function fillRestaurantInfos(){
	var restaurantId = document.getElementById('listRestaurant').value;

	fillRestaurantManagerList();

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