function addPredefinedAddress(){

	if( document.getElementById("name").value.trim().length == 0 ||
		document.getElementById("address").value.trim().length == 0 ||
		document.getElementById("city").value.trim().length == 0 ||
		document.getElementById("state").value.trim().length == 0 ||
		document.getElementById("country").value.trim().length == 0 ||
		document.getElementById("zipCode").value.trim().length == 0 ){
		var msg = new MessageBox();
	msg.show(3,"L'adresse est incomplète");
	}
	else
	{
		var info = JSON.stringify({
		"Username" : getUsername(),
		"Name" : document.getElementById("name").value,
		"Address" : {
			"Street" : document.getElementById("address").value,
			"City" : document.getElementById("city").value,
			"State" : document.getElementById("state").value,
			"Country" : document.getElementById("country").value,
			"ZipCode" : document.getElementById("zipCode").value
		});
		
		$.ajax({
			type:"PUT",
			url: API_URL + 'accounts/address',
			contentType:"application/json",
			data: info,
			success:function(data){
				
			}
		});
	}
}