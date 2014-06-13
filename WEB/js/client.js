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
		'Password' : 	encodePassword( document.getElementById('password').value)
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
			var mess = new MessageBox();
			mess.show(3,"Le nom d'usager ou le mot de passe est incorrect");
		}
	});		
}

// Creates the account of a user.
//  If successfull a message will b
function register(){
	if(document.getElementById('username').value.trim().length == 0 ||
		document.getElementById('password').value.trim().length == 0 ||
		document.getElementById('address').value.trim().length == 0 ||
		document.getElementById('city').value.trim().length == 0 ||
		document.getElementById('state').value.trim().length == 0 ||		
		document.getElementById('country').value.trim().length == 0 ||
		document.getElementById('zipCode').value.trim().length == 0 ||
		document.getElementById('firstName').value.trim().length == 0 ||
		document.getElementById('lastName').value.trim().length == 0 ||
		document.getElementById('phoneNumber').value.trim().length == 0 ||
		document.getElementById('email').value.trim().length == 0 ||
		document.getElementById('birthDate').value.trim().length == 0)
	{
		var mess = new MessageBox();
		mess.show(3,"Tous les champs sont obligatoires");
	}
	else{
		
		var account = {
			'Username' : document.getElementById('username').value,
			'Password' : encodePassword(document.getElementById('password').value)
		};

		var address = {
			'Street' : 	document.getElementById('address').value,
			'City' : 	document.getElementById('city').value,
			'State' : 	document.getElementById('state').value,
			'Country' : 	document.getElementById('country').value,
			'ZipCode' : 	document.getElementById('zipCode').value,
		};

		var info = JSON.stringify({
			'Account' : account,
			'FirstName' :    document.getElementById('firstName').value,
			'LastName' : 	document.getElementById('lastName').value,
			'Email' : document.getElementById('email').value,
			'Address' : 	address,
			'Telephone' : 	document.getElementById('phoneNumber').value,
			'BirthDate' : 	document.getElementById('birthDate').value
		});

		$.ajax({
			type:"PUT",
			url: API_URL + 'clients',
			contentType:"application/json",
			data: info,
			success : function(data){
				var mess = new MessageBox();
				mess.show(1,"Votre compte a été créé!!");

			    setTimeout(function(){
					authenticateUser( JSON.stringify(account));
	    		},2000); 
			},
			error : function(data){
				var mess = new MessageBox();
				mess.show(3,"Création du compte impossible");
			}
		});	
	}


}



//Manage client account
// Updates client information
function updateClient(){
	
	
	if(	document.getElementById('address').value.trim().length == 0 ||
		document.getElementById('city').value.trim().length == 0 ||
		document.getElementById('state').value.trim().length == 0 ||		
		document.getElementById('country').value.trim().length == 0 ||
		document.getElementById('zipCode').value.trim().length == 0 ||
		document.getElementById('phoneNumber').value.trim().length == 0 ||
		document.getElementById('email').value.trim().length == 0 ||
		document.getElementById('birthDate').value.trim().length == 0)
	{
		var mess = new MessageBox();
		mess.show(3,"Tous les champs sont obligatoires");
	}
	else{
		var username = getUsername();

		var address = {
			'Street' : 	document.getElementById('address').value,
			'City' : 	document.getElementById('city').value,
			'State' : 	document.getElementById('state').value,
			'Country' : 	document.getElementById('country').value,
			'ZipCode' : 	document.getElementById('zipCode').value,
		};

		var info = JSON.stringify({

			'Username' : username,
			'Email' : document.getElementById('email').value,
			'Address' : 	address,
			'Telephone' : 	document.getElementById('phoneNumber').value,
			'BirthDate' : 	document.getElementById('birthDate').value
		});

		$.ajax({
			type:"POST",
			url: API_URL + 'clients',
			contentType:"application/json",
			data: info,
			success:function(data){
				var mess = new MessageBox();
				mess.show(1,"Votre compte a été mis à jour");	
			},
			error : function(data){
				var mess = new MessageBox();
				mess.show(3,"Mis à jour du compte impossible");
			}
		});
	}
}

// Updates the password of the user
function updatePassword(){


	if(	document.getElementById('password').value.trim().length == 0 ||
		document.getElementById('newPassword').value.trim().length == 0 ||
		document.getElementById('confirmNewPassword').value.trim().length == 0)
	{
		var mess = new MessageBox();
		mess.show(3,"Tous les champs sont obligatoires");
	}
	else{
		var username = getUsername();
	
		var info = JSON.stringify({
			'Username' : username,
			'Password' : encodePassword(document.getElementById('newPassword').value)
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

				var mess = new MessageBox();
				mess.show(1,"Mot de passe mis à jour");	
			},
			error : function(data){
				var mess = new MessageBox();
				mess.show(3,"Mis à jour du mot de passe impossible");
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
	document.getElementById('address').value = data["Address"]["Street"];
	document.getElementById('city').value = data["Address"]["City"];
	document.getElementById('state').value = data["Address"]["State"];
	document.getElementById('country').value = data["Address"]["Country"];
	document.getElementById('zipCode').value = data["Address"]["ZipCode"];
	document.getElementById('phoneNumber').value = data["Telephone"];
	document.getElementById('birthDate').value = data["BirthDate"].substr(0,10);
	document.getElementById('email').value = data["Email"];
}