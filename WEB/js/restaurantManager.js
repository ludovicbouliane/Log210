
//TODO add restaurant!!!!
function addRestaurantManager(){
	var account = {
		'Username' : document.getElementById('username').value,
		'Password' : encodePassword(document.getElementById('password').value)
	};

	var info = JSON.stringify({
		'Account' 	: 	account,
		'FirstName' : 	document.getElementById("firstName").value,
		'LastName'	:  	document.getElementById("lastName").value
	});

	$.ajax({
		type:"PUT",
		url: API_URL + 'restaurantManagers',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Restaurateur créé");
			

			document.getElementById("username").value = '';
			document.getElementById('password').value= '';
			document.getElementById('firstName').value = '';
			document.getElementById('lastName').value = '';
			document.getElementById('listRestaurant').value = '';

		}

	});

}

//TODO add restaurant!!!
function editRestaurantManager(){
	var info = JSON.stringify({
		'Username' 	: 	getUsername(),
		'FirstName' : 	document.getElementById("firstName").value,
		'LastName'	:  	document.getElementById("lastName").value
	});

	$.ajax({
		type:"POST",
		url: API_URL + 'restaurantManagers',
		contentType:"application/json",
		data: info,
		success:function(data){

				mess.show(1,"Restaurant créé");
		}
	});
}

function deleteRestaurantManager(){
	$.ajax({
	type:"DELETE",
	url: API_URL + 'restaurantManagers/' + document.getElementById('listRestaurantManager').value,
	contentType:"application/json",
	success:function(data){
		document.getElementById('listRestaurantManager').value = '';
		
		var mess = new MessageBox();
		mess.show(1,"Le restaurateur a été supprimé");
		fillRestaurantManagerList();
		}
	});
}

function fillRestaurantManagerInfos(){
	var info = getRestaurateurInfos();

	document.getElementById('firstName') = info["LastName"];
	document.getElementById('lastName') = info["FirstName"];
	//document.getElementById('restaurantList') = 

}

function getRestaurateurInfos(){
	var info;

	$.ajax({
	type:"GET",
	url: API_URL + 'restaurantManagers/' + getUsername(),
	contentType:"application/json",
	async:false,
	success:function(data){
			info = data;
		
		}
	});	

	return info;
}