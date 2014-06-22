var API_URL = "http://log210.azurewebsites.net/api/";
var TPS = 0.05;
var TVQ = 0.09975;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Information getters
// gets all user informations
function getUserInfos(){
			
	var username = getUsername();
	var info = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'clients/'+ username,
		contentType:"application/json",
		async : false
		}).done(
			function(data){
				info = data;
			}
		);	

	return info;	
}

//encodes the password for security purpose
function encodePassword(password){
	var info = {
		'encode' : 1,
		'Password' : password
	};

	var encoded = '';

	$.ajax({
		type:"POST",
		url : '/profil.php',
		async : false,
		data : info,
		success : function(data){
			encoded = data;
		}
	})

	return encoded;
}

//gets the userID
function getUsername(){
	var username = '';

	$.ajax({
		type:"POST",
		url : '/profil.php',
		async : false,
		data : { 'getUsername' : 1},
		success : function(data){
			username = data;
		}
	});
	return username;
}

// gets the name and id of all restaurateur
function getAllRestaurantManagerByContractor(){
	var restaurateur = '';
	$.ajax({
		type:"GET",
		url: API_URL + 'restaurantManagers/contractors/' + getUsername(),
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurateur = data;
			}
		);
		return restaurateur;
}

// gets all restaurant name and id
function getAllRestaurantByContractor(){
	var restaurant = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'restaurants/contractors/' + getUsername(),
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurant = data;
		}
	);
	return restaurant;
}

// gets all restaurant name and id
function getAllRestaurantName(){
	var restaurant = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'restaurants/name',
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurant = data;
			}
		);
	return restaurant;
}

// gets all restaurant name and id
function getAllRestaurant(){
	var restaurant = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'restaurants',
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurant = data;
			}
		);
	return restaurant;
}

//gets all informations about a restaurant
function getRestaurantInfos(restaurantId){

	var info = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'restaurants/' + restaurantId,
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				info = data;
		}
	);

	return info;
}


function getRestaurantManagerInfos(restaurantManagerId){
	var info;

	$.ajax({
	type:"GET",
	url: API_URL + 'restaurantManagers/' + restaurantManagerId,
	contentType:"application/json",
	async:false,
	success:function(data){
			info = data;
		
		}
	});	

	return info;
}

//If null is returned no menu exist for this restaurant
function getMenuFromRestaurantId(restaurantId){
	var menu = null;

	$.ajax({
		type:"GET",
		url: API_URL + 'menus/restaurant/' + restaurantId,
		contentType:"application/json",
		async:false,
		success:function(data){
			menu = data;
		},
		error: function(data){

		}
	});

	return menu;
}

function getDishesFromMenuId(menuId){
	var dishes = null;

	$.ajax({
		type:"GET",
		url: API_URL + 'menus/menu/' + menuId,
		contentType:"application/json",
		async:false,
		success:function(data){
			dishes = data;
		},
		error: function(data){

		}
	});

	return dishes;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Common setters
//Notifies the system that the user is logged in
function setIsLoggedIn(info){

	$.ajax({
		type : 'POST',
		url : '/index.php',
		data: info,
		success : function(data){
				window.location.href = 'accueil.php';
			}
		});
}

//Adds a option in a select with an empty string value 
//	and none as shown text

function addNoneOption(){
	var noneOption = document.createElement("option");	
	noneOption.setAttribute("value","");

	var none = document.createTextNode("Aucun");

	noneOption.appendChild(none);	
	return noneOption;
}

// fills a select with all restaurant name.
//	Used in the deleteRestaurant and editRestaurant pages.
function fillRestaurantList(listRestaurant){

	var selectContainer = document.getElementById('listRestaurant');

	while (selectContainer.hasChildNodes()) {
 	   selectContainer.removeChild(selectContainer.lastChild);
	}
		
	selectContainer.appendChild(addNoneOption());

	for(var i=0 ; i<listRestaurant.length ; i++){
		var rest = listRestaurant[i];
		
		var option = document.createElement("option");	
		option.setAttribute("value",rest["Id"]);

		var name = document.createTextNode(rest["Name"]);

		option.appendChild(name);	
		selectContainer.appendChild(option);
	}

	return listRestaurant.length+1;
}

// fills a select with all restaurateur name.
//	Used in the  addRestaurant and editRestaurant pages.
function fillRestaurantManagerList(){
	var listRestaurateur = getAllRestaurantManagerByContractor();

	var selectContainer = document.getElementById('listRestaurantManager');

	while (selectContainer.hasChildNodes()) {
 	   selectContainer.removeChild(selectContainer.lastChild);
	}
		
	selectContainer.appendChild(addNoneOption());

	for(var i=0 ; i<listRestaurateur.length ; i++){
		var rest = listRestaurateur[i];
		
		var option = document.createElement("option");	
		option.setAttribute("value",rest["Username"]);
		
		var name = document.createTextNode(rest["FirstName"] + " " + rest["LastName"]);

		option.appendChild(name);	
		selectContainer.appendChild(option);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// RestaurantManager modifier

function updateRestaurantManager(info){
	return $.ajax({
	type:"POST",
	url: API_URL + 'restaurantManagers',
	contentType:"application/json",
	data: info,
	});
}
