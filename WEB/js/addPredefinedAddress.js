function addPredefinedAddress(){
	var info = JSON.stringify({
		"Username" : getUsername(),
		"Name" : document.getElementById("name").value,
		"Address" : document.getElementById("address").value,
		"City" : document.getElementById("city").value,
		"State" : document.getElementById("state").value,
		"Country" : document.getElementById("country").value,
		"ZipCode" : document.getElementById("zipCode").value
	});

	console.log(info);
	
	$.ajax({
		type:"post",
		url: API_URL + 'accounts/address',
		contentType:"application/json",
		data: info,
		success:function(data){
			
		}
	});
}