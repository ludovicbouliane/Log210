var API_URL = "http://log210.azurewebsites.net/api/";

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Information getters
// gets all user informations
function getUserInfos(){
			
	var userId = getUserId();
	var info = '';

	$.ajax({
		type:"GET",
		url: API_URL + 'clients/'+ userId,
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
		url : 'profil.php',
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
		url : 'profil.php',
		async : false,
		data : { 'getUsername' : 1},
		success : function(data){
			username = data;
		}
	});
	return username;
}

// gets the name and id of all restaurateur
function getAllRestaurantManager(){
	var restaurateur = '';
	$.ajax({
		type:"GET",
		url: API_URL + 'restaurantManagers',
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
function getAllRestaurant(){
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Common setters
//Notifies the system that the user is logged in
function setIsLoggedIn(info){

	$.ajax({
		type : 'POST',
		url : 'index.php',
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

// fills a select with all restaurateur name.
//	Used in the  addRestaurant and editRestaurant pages.
function fillRestaurantManagerList(){
	var listRestaurateur = getAllRestaurantManager();

	var selectContainer = document.getElementById('listRestaurantManager');

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