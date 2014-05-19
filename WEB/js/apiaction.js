var apiUrl = "http://log210.azurewebsites.net/api/";

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

function getUserInfos(){
			
	var userId = '';

	$.ajax({
		type:"POST",
		url:'profil.php',
		data: "getUserId=1"
		}).done(
			function(data){
				userId = data;
			}
		);

	$.ajax({
		type:"GET",
		url: apiUrl + 'clients/'. userId,
		contentType:"application/json",
		}).done(
			function(data){
				document.getElementById('username').value = data["Account"]["Username"];
				
				document.getElementById('firstName').value = data["FirstName"];
				document.getElementById('lastName').value= data["LastName"];
				document.getElementById('address').value = data["Adress"];
				document.getElementById('city').value = data["Adress"];
				document.getElementById('state').value = data["Adress"];
				document.getElementById('country').value = data["Adress"];
				document.getElementById('zipCode').value = data["Adress"];
				document.getElementById('phoneNumber').value = data["Telephone"];
				document.getElementById('birthDate').value = data["BirthDate"];
				}
			);		
}

function updateClient(){
	var userId = '';

	$.ajax({
		type:"POST",
		url:'profil.php',
		data: "getUserId=1"
		}).done(
			function(data){
				//retrieve user id
				userId = data;
			}
		);
	
	var account = {
		'Username' : document.getElementById('username').value,
	};

	var info = JSON.stringify({

		'Id' : userId,
		'Account' : account,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
		'Adress' : 	document.getElementById('address').value,
		//'city' : 	document.getElementById('city').value,
		//'State' : 	document.getElementById('state').value,
		//'Country' : 	document.getElementById('country').value,
		//'ZipCode' : 	document.getElementById('zipCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value,
		'BirthDate' : 	document.getElementById('birthDate').value
	});

	$.ajax({
		type:"POST",
		url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/clients',
		contentType:"application/json",
		data: info,
		success:function(data){

		}

	});
}

function updatePassword(){

	if(document.getElementById('newPassword').value == document.getElementById('confirmNewPassword').value){

		var username = '';

		$.ajax({
			type:"POST",
			url : 'profil.php',
			data : { 'getUsername' : 1},
			success : function(data){
				console.log(data);
				username = data;
			}
		});

		
		var info = JSON.stringify({
			'Username' : username,
			'NewPassword' : document.getElementById('newPassword').value
		});

		$.ajax({
			type:"POST",
			url: url + 'accounts/password',
			contentType:"application/json",
			data: info,
			success:function(data){

			}

		});
	}
}
