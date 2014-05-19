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
		'State' : 	document.getElementById('province').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('postalCode').value,
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
	
	var account = {
		'Username' : document.getElementById('username').value,
	};

	var info = JSON.stringify({

		'Id' : userId,
		'Account' : account,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
		'Address' : 	document.getElementById('address').value,
		'City' : 	document.getElementById('city').value,
		'State' : 	document.getElementById('province').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('postalCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value.substr(0,10),
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

//Managing restaurant
function addRestaurant(){
	
}

function updateRestaurant(){

}

function deleteRestaurant(){

}

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
				document.getElementById('province').value = data["State"];
				document.getElementById('country').value = data["Country"];
				document.getElementById('postalCode').value = data["ZipCode"];
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