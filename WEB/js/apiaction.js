var API_URL = "http://log210.azurewebsites.net/api/";
var ENTER_KEY = 13;

//Called when a key up event is thown in the password 
//	input of the index page. If the key is the 'Enter' 
//	key, we authenticate the user.
function parseKeyUp(){
	if(event.keyCode == ENTER_KEY){
		authenticate();
	}
}

// authenticates the user when we are in the index page.
function authenticate(){
	var info = 	JSON.stringify({
		'Username' :    document.getElementById('username').value,
		'Password' : 	document.getElementById('password').value
	});
	authenticateUser(info);
}

// authenticates the user.
// If successfull we set notify the system that 
//	the user is logged in.
// If an error occured, the password is reased and the an 
//	error will be displayed.
function authenticateUser(info){

	$.ajax({
		type:"post",
		url: API_URL + 'accounts/login',
		contentType:"application/json",
		data: info,
		success:function(data){
			setIsLoggedIn(data);
		},
		error:function(data){
			document.getElementById('password').value = ''
			showErrorMessage("Le nom d'usager ou le mot de passe est incorrect");
		}
	});		
}

// Creates the account of a user.
//  If successfull a message will b
function register(){
	var account = {
		'Username' : document.getElementById('username').value,
		'Password' : document.getElementById('password').value
	};

	var info = JSON.stringify({
		'Account' : account,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
		'Address' : 	document.getElementById('address').value,
		'City' : 	document.getElementById('city').value,
		'State' : 	document.getElementById('state').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('zipCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value,
		'BirthDate' : 	document.getElementById('birthDate').value
	});

	$.ajax({
		type:"PUT",
		url: API_URL + 'clients',
		contentType:"application/json",
		data: info,
		success : function(data){
			showSuccessMessage("Votre compte a été créé!!");
		},
		error : function(data){
			showErrorMessage("Création du compte impossible");
		}
	});	
}

//Manage client account
// Updates client information
function updateClient(){
	var userId = getUserId();

	var info = JSON.stringify({

		'Id' : userId,
		'Address' : 	document.getElementById('address').value,
		'City' : 		document.getElementById('city').value,
		'State' : 		document.getElementById('state').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('zipCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value,
		'BirthDate' : 	document.getElementById('birthDate').value
	});
	
	$.ajax({
		type:"POST",
		url: API_URL + 'clients',
		contentType:"application/json",
		data: info,
		success:function(data){
			showSuccessMessage("Votre compte a été mis à jour");
		},
		error : function(data){
			showErrorMessage("Mis à jour du compte impossible");
		}
	});
}

// Updates the password of the user
function updatePassword(){

	if(document.getElementById('newPassword').value == document.getElementById('confirmNewPassword').value){

		var accountId = getUserInfos()["AccountId"];
	
		var info = JSON.stringify({
			'Id' : accountId,
			'Password' : document.getElementById('newPassword').value
		});

		$.ajax({
			type:"POST",
			url: API_URL + 'accounts/password',
			contentType:"application/json",
			data: info,
			success:function(data){
				document.getElementById('password').value = '';
				document.getElementById('newPassword').value = '';
				document.getElementById('confirmNewPassword').value = '';

				showSuccessMessage("Mot de passe mis à jour");
			},
			error : function(data){
				showErrorMessage("Mis à jour du mot de passe impossible");
			}
		});
	}
}

// Fills all fields of the editProfil page with users informations
function fillProfilInfo(){

	var data = getUserInfos();
	var username = getUsername(data["AccountId"]);

	document.getElementById('username').innerHTML = username;
	document.getElementById('firstName').innerHTML = data["FirstName"];
	document.getElementById('lastName').innerHTML= data["LastName"];
	document.getElementById('address').value = data["Address"];
	document.getElementById('city').value = data["City"];
	document.getElementById('state').value = data["State"];
	document.getElementById('country').value = data["Country"];
	document.getElementById('zipCode').value = data["ZipCode"];
	document.getElementById('phoneNumber').value = data["Telephone"];
	document.getElementById('birthDate').value = data["BirthDate"].substr(0,10);
}

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
				showWarningMessage("Aucun restaurateur n'a été assigné pour le restaurant créé");
			}
			else{
				showSuccessMessage("Restaurant créé");	
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
				showWarningMessage("Aucun restaurateur n'a été assigné pour le restaurant mis à jour");
			}
			else{
				showSuccessMessage("Restaurant mis à jour");	
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
			fillRestaurantList();

			showSuccessMessage("Le restaurant a été supprimé");
		}

	});
}

// fills a select with all restaurateur name.
//	Used in the  addRestaurant and editRestaurant pages.
function fillRestaurateurList(){
	var listRestaurateur = getAllRestaurateur();

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

//gets the userID
function getUserId(){
	var userId = '';

	$.ajax({
		type:"POST",
		url : 'profil.php',
		async : false,
		data : { 'getUserId' : 1},
		success : function(data){
			userId = data;
		}
	});

	return userId;
}

// gets the username
function getUsername(accountId){
	var username = '';

	$.ajax({
		type:"GET",
		url : API_URL + 'accounts/username/' + accountId,
		async : false,
		success : function(data){
			username = data;
		}
	});

	return username;
}

// gets the name and id of all restaurateur
function getAllRestaurateur(){
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

// Shows a success message alert
function showSuccessMessage(message){
	var messageDiv = document.getElementById('message');
	
	while (messageDiv.hasChildNodes()) {
 	   messageDiv.removeChild(messageDiv.lastChild);
	}

	var msg = document.createTextNode(message);
	
	messageDiv.setAttribute("class", "alert alert-success");
	messageDiv.appendChild(msg);
}

// Shows a error message alert
function showErrorMessage(error){
	var messageDiv = document.getElementById('message');

	while (messageDiv.hasChildNodes()) {
 	   messageDiv.removeChild(messageDiv.lastChild);
	}

	var msg = document.createTextNode(error);

	messageDiv.setAttribute("class", "alert alert-danger");
	messageDiv.appendChild(msg);
}

//shows a warning message alert
function showWarningMessage(warning){
	var messageDiv = document.getElementById('message');

	while (messageDiv.hasChildNodes()) {
 	   messageDiv.removeChild(messageDiv.lastChild);
	}

	var msg = document.createTextNode(warning);

	messageDiv.setAttribute("class", "alert alert-warning");
	messageDiv.appendChild(msg);
}