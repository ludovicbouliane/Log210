var apiUrl = "http://log210.azurewebsites.net/api/";

//Login user
function authenticate(){
	var info = 	JSON.stringify({
		'Username' :    document.getElementById('username').value,
		'Password' : 	document.getElementById('password').value
	});
	authenticateUser(info);
}

function authenticateUser(info){

	$.ajax({
		type:"post",
		url: apiUrl + 'accounts/login',
		contentType:"application/json",
		data: info,
		success:function(data){
				document.getElementById('password').value = ''
				setIsLoggedIn(data);
			},
		error:function(data){
				//TODO try to hide the javascript error
				console.log(data.responseText);
			}
		});		
}

//Create user account
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
		url: apiUrl + 'clients',
		contentType:"application/json",
		data: info,
		success : function(data){
				//Here we should receive a message code saying creation worked or not

				var userInfo = 	JSON.stringify({
					'Username' :    document.getElementById('username').value,
					'Password' : 	document.getElementById('password').value
				});
				authenticateUser(userInfo);
			},
		error : function(data){
			console.log(data.responseText);
		}
		});	
}

//Manage client account
function updateClient(){
	var userId = getUserId();

	var info = JSON.stringify({

		'Id' : userId,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
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
		url: apiUrl + 'clients',
		contentType:"application/json",
		data: info,
		success:function(data){

		}

	});
}

function updatePassword(){

	if(document.getElementById('newPassword').value == document.getElementById('confirmNewPassword').value){

		var userId = getUserId();
	
		var info = JSON.stringify({
			'Id' : userId,
			'Password' : document.getElementById('newPassword').value
		});

		$.ajax({
			type:"POST",
			url: apiUrl + 'accounts/password',
			contentType:"application/json",
			data: info,
			success:function(data){
				document.getElementById('password').value = '';
				document.getElementById('newPassword').value = '';
				document.getElementById('confirmNewPassword').value = '';
			}

		});
	}
}

function fillPRofilInfo(){

	var data = getUserInfos();

	document.getElementById('username').value = data["Account"]["Username"];
	document.getElementById('firstName').value = data["FirstName"];
	document.getElementById('lastName').value= data["LastName"];
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
		url: apiUrl + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){
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
		url: apiUrl + 'restaurants',
		contentType:"application/json",
		data: info,
		success:function(data){

		}

	});
}

function deleteRestaurant(){
	$.ajax({
		type:"DELETE",
		url: apiUrl + 'restaurants/' + document.getElementById('listRestaurant').value,
		contentType:"application/json",
		success:function(data){
			document.getElementById('listRestaurant').value = '';
			fillRestaurantList();
		}

	});
}

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
function getUserInfos(){
			
	var userId = getUserId();
	var info = '';

	$.ajax({
		type:"GET",
		url: apiUrl + 'clients/'+ userId,
		contentType:"application/json",
		}).done(
			function(data){
				info = data;
			}
		);	

	return info;	
}

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

function getUsername(){
	var info = getUserInfos();

	return info["Account"]["Username"];
}

function getAllRestaurateur(){
	var restaurateur = '';
	$.ajax({
		type:"GET",
		url: apiUrl + 'restaurantManagers',
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurateur = data;
			}
		);
		return restaurateur;
}

function getAllRestaurant(){
	var restaurant = '';

	$.ajax({
		type:"GET",
		url: apiUrl + 'restaurants/name',
		contentType:"application/json",
		async:false
		}).done(
			function(data){
				restaurant = data;
			}
		);
	return restaurant;
}

function getRestaurantInfos(restaurantId){

	var info = '';

	$.ajax({
		type:"GET",
		url: apiUrl + 'restaurants/' + restaurantId,
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

function addNoneOption(){
	var noneOption = document.createElement("option");	
	noneOption.setAttribute("value","");

	var none = document.createTextNode("Aucun");

	noneOption.appendChild(none);	
	return noneOption;
}