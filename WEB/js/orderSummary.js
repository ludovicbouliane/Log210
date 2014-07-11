var order = null;
var lastShippingAdresse = '1';

window.onload = function(){
	getPredefinedAddresses();
	
	order = retrieveOrderFromCookies();

	document.getElementById("restaurantName").innerHTML = getRestaurantInfos(order["RestaurantId"])["Name"];

	computeTotal();

	addOnChangeListenerToAddressRadio();

	initDeliveryTime();
}

function confirmOrder(){
	var message = new MessageBox();

	if(order === null){
		message.show(3,"Veillez activer les cookies de votre furteur");
	}
	else {
		if(document.getElementById("date").value.trim().length !== 0){
			order["DeliveryTime"] = document.getElementById("date").value + ' ' +
									document.getElementById("timeHour").value + ':' +
									document.getElementById("timeMinute").value;

			var addressComplete = true;

			switch(lastShippingAdresse){
				case '1':
					order["Address"] = getUserInfos()["Address"];
					break;
				case '2':
					order["Address"] = getPredefinedAddressInfo()["Address"];
					break;
				case '3':
					if(	document.getElementById("address").value.trim().length == 0 ||
						document.getElementById("city").value.trim().length == 0 ||
						document.getElementById("state").value.trim().length == 0 ||
						document.getElementById("country").value.trim().length == 0 ||
						document.getElementById("zipCode").value.trim().length == 0 )
					{
						addressComplete = false;
						message.show(3,"L'adresse fournit n'est pas complète");
					}
					else{
						order["Address"] = {
							"Street" : document.getElementById("address").value,
							"City" : document.getElementById("city").value,
							"State" : document.getElementById("state").value,
							"Country" : document.getElementById("country").value,
							"ZipCode" : document.getElementById("zipCode").value
						};	
					}
					break;
			}
			
			if(addressComplete){
				finalizeOrder(order);
			}
		}
		else{
			message.show(3,"Please turn on cookies of your browser");		
		}
	}
}

/////////////////////////////////////////////////////////
// Initialization

function retrieveOrderFromCookies(){
	var cookies = document.cookie.split(";");
	var tempOrder = [];


	for (var i = 0; i < cookies.length; i++) {
		if(cookies[i].indexOf("order=") === 0){
			tempOrder = JSON.parse(cookies[i].substring(6));
			break;
		}
	};

	return tempOrder;
}

function addOrderLine(orderLine){
	var row  = document.createElement("div");

	var qteDiv = document.createElement("div");
	var nameDiv = document.createElement("div");
	var priceDiv = document.createElement("div");

	qteDiv.appendChild(document.createTextNode(orderLine["Quantity"]));
	nameDiv.appendChild(document.createTextNode(orderLine["Name"]));
	priceDiv.appendChild(document.createTextNode((orderLine["Quantity"]*orderLine["Price"]).toFixed(2) + " $"));

	row.setAttribute("class", "row");
	qteDiv.setAttribute("class","col-xs-3 center");
	nameDiv.setAttribute("class","col-xs-3");	
	priceDiv.setAttribute("class","col-xs-4 col-sm-3 col-md-2 col-xl-2 right");

	row.appendChild(qteDiv);
	row.appendChild(nameDiv);
	row.appendChild(priceDiv);

	document.getElementById("orderContent").appendChild(row);
}

function computeTotal(){
	var subtotal = 0;
	for (var i = 0; i < order["Dishes"].length; i++) {
		addOrderLine(order["Dishes"][i]);

		subtotal += (order["Dishes"][i]["Quantity"] * order["Dishes"][i]["Price"]);
	};

	var tempTps = subtotal * TPS;
	var tempTvq = subtotal * TVQ;
	var total = subtotal + tempTps + tempTvq;

	document.getElementById("subTotal").innerHTML = subtotal.toFixed(2);	
	document.getElementById('tps').innerHTML = tempTps.toFixed(2);
	document.getElementById('tvq').innerHTML = tempTvq.toFixed(2);
	document.getElementById('total').innerHTML = total.toFixed(2);
}

function addOnChangeListenerToAddressRadio(){
	$("input[name=shippingAddress]:radio").change(function () {
		switch(lastShippingAdresse){
			case '2':
				document.getElementById("prefAddress").setAttribute("class","hide");
				break;
			case '3':
				document.getElementById("newAddress").setAttribute("class","hide");
				break;
		}	

		lastShippingAdresse = $("input[name=shippingAddress]:checked").val();

		switch(lastShippingAdresse){
			case '2':
				document.getElementById("prefAddress").setAttribute("class","show");
				break;
			case '3':
				document.getElementById("newAddress").setAttribute("class","show");
				break;
		}	

	});
}

function initDeliveryTime(){

	var select = document.getElementById('timeHour');
	for (var i = 0; i < 24; i++) {
		var option = document.createElement("option");
		option.setAttribute("value",i);
		var text = document.createTextNode(i);
		option.appendChild(text);
		select.appendChild(option);
	};

	$("#date").datepicker({dateFormat: "dd/mm/yy" });
	var d = new Date();
    $("#date").datepicker("setDate",d.getDate() +"/"+ (d.getMonth()+1) + "/" + d.getFullYear());

    //Adding an hour to now time for delievery
    d = new Date(d.getTime() + 1*60*60*1000); 
    
   	document.getElementById("timeHour").value = d.getHours();
}


/////////////////////////////////////////////////////////
// Api calls

function finalizeOrder(confirmedOrder){

	confirmedOrder = JSON.stringify(confirmedOrder);

	$.ajax({
		type:"PUT",
		url : API_URL + 'orders',
		contentType:"application/json",
		data : confirmedOrder,
		success : function(data){
			if(confirm("Numéro de confirmation : " + data)){
				document.cookie = "order=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
				window.location = "/order/restaurant";
			}
			else{
				document.cookie = "order=; expires=Thu, 01 Jan 1970 00:00:00 GMT";	
				window.location = "/order/restaurant";
			}
		}
	});
}

function getPredefinedAddresses(){
	$.ajax({
		type:"GET",
		contentType:"application/json",
		url : API_URL + 'clients/predefinedAddress/' + getUsername(),
		success : function(data){
			var listPrefAddresses = data;

			var selectContainer = document.getElementById('listPreferedAddresses');

			while (selectContainer.hasChildNodes()) {
		 	   selectContainer.removeChild(selectContainer.lastChild);
			}
				
			selectContainer.appendChild(addNoneOption());

			for(var i=0 ; i<listPrefAddresses.length ; i++){
				var address = listPrefAddresses[i];
				
				var option = document.createElement("option");	
				option.setAttribute("value",address["Id"]);
				
				var name = document.createTextNode(address["Name"]);

				option.appendChild(name);	
				selectContainer.appendChild(option);
			}
		}
	});
}

function getPredefinedAddressInfo(){
	var address = null;
	$.ajax({
		type:"GET",
		contentType:"application/json",
		async : false,
		url : API_URL + 'clients/predefinedAddress/address/' + document.getElementById('listPreferedAddresses').value,
		success : function(data){
			address = data;
		}
	});

	return address;
}