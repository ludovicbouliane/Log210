function authenticate(){
	var info = {
		'Username' :    document.getElementById('username').value,
		'Password' : 	document.getElementById('password').value
	}

	document.getElementById('password').value = ''

	$.ajax({
		type:"POST",
		url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/accounts/login',
		corssDomain:true,
		mimeType:"application/json",
		data: info,
		success:function(data){
			var account = JSON.parse(data);

		}
	});		

	
}

function register(){
	var account = {
		'Username' : document.getElementById('username').value,
		'Password' : document.getElementById('password').value
	};

	var info = {
		'Account' : account,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
		'Adress' : 	document.getElementById('address').value,
		'city' : 	document.getElementById('city').value,
		'State' : 	document.getElementById('state').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('zipCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value,
		'BirthDate' : 	document.getElementById('birthDate').value
	};

	$.ajax({
		type:"POST",
		url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/clients',
		corssDomain:true,
		mimeType:"application/json",
		data: info,
		success:function(data){
			var account = JSON.parse(data);


			console.log(account);

		}
	});	
}

//TODO add ger user infos in api
function getUserInfos(){
			
	$.ajax({
		type:"POST",
		url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/clients',
		corssDomain:true,
		mimeType:"application/json",
		success:function(data){

		}
	});		

}

function updateClient(){
	var account = {
		'Username' : document.getElementById('username').value,
	};

	var info = {
		//TODO find a way to get the client id 
		'Id' : null,
		'Account' : account,
		'FirstName' :    document.getElementById('firstName').value,
		'LastName' : 	document.getElementById('lastName').value,
		'Adress' : 	document.getElementById('address').value,
		'city' : 	document.getElementById('city').value,
		'State' : 	document.getElementById('state').value,
		'Country' : 	document.getElementById('country').value,
		'ZipCode' : 	document.getElementById('zipCode').value,
		'Telephone' : 	document.getElementById('phoneNumber').value,
		'BirthDate' : 	document.getElementById('birthDate').value
	};

	$.ajax({
		type:"POST",
		url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/clients',
		corssDomain:true,
		mimeType:"application/json",
		data: info,
		success:function(data){

		}

	});
}

function updatePassword(){

	if(document.getElementById('newPassword').value == document.getElementById('confirmNewPassword').value){

		//TODO get the username
		var account = {
			'Username' : 'The username',
			'Password' : document.getElementById('password').value
		};

		var info = {
			//TODO find a way to get the client id 
			'Id' : null,
			'Account' : account,
			'NewPassword' : document.getElementById('newPassword').value
		};

		$.ajax({
			type:"POST",
			url: 'http://mcroteau.no-ip.org:8080/LOG210/WebService/api/clients',
			corssDomain:true,
			mimeType:"application/json",
			data: info,
			success:function(data){

			}

		});	
	}
	else{
		
		
		document.getElementById('')

	}

}