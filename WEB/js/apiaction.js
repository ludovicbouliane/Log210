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

	document.getElementById('password').value = ''

	$.ajax({
		type:"post",
		url: apiUrl + 'accounts/login',
		contentType:"application/json",
		data: info,
		success:function(data){

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
	console.log(info);
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
	var username = getUsername();
	
	var account = {
		'Username' : username
	};

	var info = JSON.stringify({

		'Id' : userId,
		'Account' : account,
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

		//var userId = getUserId();
		var username = getUsername();
		console.log(username);
		var info = JSON.stringify({
			'Username' : username,
			'Password' : document.getElementById('newPassword').value
		});

		$.ajax({
			type:"POST",
			url: apiUrl + 'accounts/password',
			contentType:"application/json",
			data: info,
			success:function(data){
				console.log(data)
			}

		});
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Managing restaurant
function addRestaurant(){
	var info = JSON.stringify({
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

		}

	});
}

function updateRestaurant(){
	var info = JSON.stringify({
		'Name' : 				document.getElementById("name").value,
		'Address' : 			document.getElementById('address').value,
		'City' : 				document.getElementById('city').value,
		'State' : 				document.getElementById('state').value,
		'Country' : 			document.getElementById('country').value,
		'ZipCode' : 			document.getElementById('zipCode').value,
		'Telephone' : 			document.getElementById('phoneNumber').value,
		'RestaurantManagerId' : document.getElementById('listRestaurateur').value
	});
}

function deleteRestaurant(){

}

function fillRestaurateurList(){
	var listRestaurateur = getAllRestaurateur();

	var selectContainer = document.getElementById('listRestaurateur');

	for(var i=0 ; i<listRestaurateur.length ; i++){
		var rest = listRestaurateur[i];
		
		var option = document.createElement("option");	
		option.setAttribute("value",rest["Id"]);

		var name = document.createTextNode(rest["FirstName"] + " " + rest["LastName"]);

		option.appendChild(name);	
		selectContainer.appendChild(option);
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Information getters
function getUserInfos(){
			
	var userId = getUserId();

	$.ajax({
		type:"GET",
		url: apiUrl + 'clients/'+ userId,
		contentType:"application/json",
		}).done(
			function(data){
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
			);		
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