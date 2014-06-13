
function addRestaurantManager(){

	if(document.getElementById("username").value.trim().length == 0 ||
			document.getElementById("password").value.trim().length == 0 ||
			document.getElementById("firstName").value.trim().length == 0 ||
			document.getElementById("lastName").value.trim().length == 0 )
	{
		var mess = new MessageBox();
		mess.show(3,"Tous les champs sont obligatoires mis à part le restaurant");
	}
	else{
		var account = {
			'Username' : document.getElementById('username').value,
			'Password' : encodePassword(document.getElementById('password').value)
		};

		var info = JSON.stringify({
			'Account' 	: 	account,
			'ContractorUsername' : getUsername(),
			'FirstName' : 	document.getElementById("firstName").value,
			'LastName'	:  	document.getElementById("lastName").value,
			'RestaurantIds' : getSelectedRestaurantAssignedToRestaurantManager()
		});

		$.ajax({
			type:"PUT",
			url: API_URL + 'restaurantManagers',
			contentType:"application/json",
			data: info,
			success:function(data){

				if(document.getElementById('listRestaurant').value.length == 0){
					var mess = new MessageBox();
					mess.show(2,"Aucun restaurant n'a été assigné pour le restaurateur créé");
				}
				else{
					var mess = new MessageBox();
					mess.show(1,"Restaurateur créé");
				}			

				document.getElementById("username").value = '';
				document.getElementById('password').value= '';
				document.getElementById('firstName').value = '';
				document.getElementById('lastName').value = '';
				document.getElementById('listRestaurant').value = '';

			}

		});
	}
	
}

//TODO add restaurant!!!
function editRestaurantManager(){

	if(document.getElementById('listRestaurantManager').value == ""){
		var mess = new MessageBox();
		mess.show(3,"Veuillez sélectionner un restaurateur");
	}
	else if(document.getElementById("firstName").value.trim().length == 0 ||
			document.getElementById("lastName").value.trim().length == 0 )
	{
		var mess = new MessageBox();
		mess.show(3,"Tous les champs sont obligatoires mis à part le restaurant");
	}
	else{
		var info = JSON.stringify({
			'Username' 	: 	document.getElementById('listRestaurantManager').value,
			'FirstName' : 	document.getElementById("firstName").value,
			'LastName'	:  	document.getElementById("lastName").value,
			'RestaurantIds' : getSelectedRestaurantAssignedToRestaurantManager()	
		});


		updateRestaurantManager(info).success(
			function(data){
				var mess = new MessageBox();
				mess.show(1,"Restaurateur mis à jour");

				emptyRestaurantManagerInfos();
				fillRestaurantManagerList();
			}
		);
	}
}

function deleteRestaurantManager(){
	if(document.getElementById('listRestaurantManager').value == ""){
		var mess = new MessageBox();
		mess.show(3,"Aucun restaurateur sélectionné");
	}
	else{	
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
}

function fillRestaurantManagerInfos(){
	var info = getRestaurantManagerInfos(document.getElementById('listRestaurantManager').value);

	var listRestaurant = document.getElementById('listRestaurant');

	document.getElementById('firstName').value = info["FirstName"];
	document.getElementById('lastName').value = info["LastName"];
	listRestaurant.setAttribute('size',fillRestaurantList(getAllRestaurantByContractor()));


	
	for (var i = 0; i < listRestaurant.options.length; i++) {
		if(info["RestaurantIds"].indexOf(listRestaurant.options[i].value.trim()) >= 0 )
		{
			listRestaurant.options[i].selected = true;
		}
	};

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

function emptyRestaurantManagerInfos(){
	document.getElementById('firstName').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('listRestaurant').value = '';
}