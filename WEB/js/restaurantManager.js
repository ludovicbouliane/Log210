
//TODO add restaurant!!!!
function addRestaurantManager(){
	var account = {
		'Username' : document.getElementById('username').value,
		'Password' : encodePassword(document.getElementById('password').value)
	};
	
	var optionsArray = getSelectedRestaurantAssignedToRestaurantManager;

	var info = {
		'Account' 	: 	account,
		'FirstName' : 	document.getElementById("firstName").value,
		'LastName'	:  	document.getElementById("lastName").value
	};

	if(optionsArray.length > 0){
		info["RestaurantIds"] = optionsArray;
	}
	
	info = JSON.stringify(info);
	
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
	var info = {
		'Username' 	: 	document.getElementById('listRestaurantManager').value,
		'FirstName' : 	document.getElementById("firstName").value,
		'LastName'	:  	document.getElementById("lastName").value
	};

	var optionsArray = getSelectedRestaurantAssignedToRestaurantManager();	

	if(optionsArray.length > 0){
		info["RestaurantIds"] = optionsArray;
	}
	
	info = JSON.stringify(info);

	$.ajax({
		type:"POST",
		url: API_URL + 'restaurantManagers',
		contentType:"application/json",
		data: info,
		success:function(data){
			var mess = new MessageBox();
			mess.show(1,"Restaurateur mis à jour");
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

	document.getElementById('firstName').value = info["FirstName"];
	document.getElementById('lastName').value = info["LastName"];
	document.getElementById('listRestaurant').setAttribute('size',fillRestaurantList());


	var restaurantIds = new Array();
	
	for (var i = 0; i < info["RestaurantIds"].length; i++) {
		restaurantIds.push(info["RestaurantIds"]);
	};

	console.log(restaurantIds.length);

	for (var i = 0; i < document.getElementById('listRestaurant').options.length; i++) {
		if(restaurantIds.indexOf(document.getElementById('listRestaurant').options[i].value) > 0 )
		{
			document.getElementById('listRestaurant').options[i].selected = true;
		}
	};

}

function getRestaurateurInfos(){
	var info;

	$.ajax({
	type:"GET",
	url: API_URL + 'restaurantManagers/' + document.getElementById('listRestaurantManager').value,
	contentType:"application/json",
	async:false,
	success:function(data){
			info = data;
		
		}
	});	

	return info;
}

function getSelectedRestaurantAssignedToRestaurantManager(){
	
	var optionsArray = new Array();

	for (var i = 0; i < document.getElementById('listRestaurant').options.length; i++) {
		if(document.getElementById('listRestaurant').options[i].selected && document.getElementById('listRestaurant').options[i].value !== ""){
			optionsArray.push(document.getElementById('listRestaurant').options[i].value);
		}
	};

	return optionsArray;
}