var order = null;
var lastShippingAdresse = '1';

window.onload = function(){
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		if(cookies[i].indexOf("order=") === 0){
			order = JSON.parse(cookies[i].substring(6));
			//document.cookie = "order=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
			break;
		}
	};

	document.getElementById("restaurantName").innerHTML = getRestaurantInfos(order["restaurantId"])["Name"];

	var subtotal = 0;
	for (var i = 0; i < order["dishes"].length; i++) {
		addOrderLine(order["dishes"][i]);

		subtotal += (order["dishes"][i]["Quantity"] * order["dishes"][i]["Price"]);
	};

	var tempTps = subtotal * TPS;
	var tempTvq = subtotal * TVQ;
	var total = subtotal + tempTps + tempTvq;

	document.getElementById("subTotal").innerHTML = subtotal.toFixed(2);	
	document.getElementById('tps').innerHTML = tempTps.toFixed(2);
	document.getElementById('tvq').innerHTML = tempTvq.toFixed(2);
	document.getElementById('total').innerHTML = total.toFixed(2);

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

	var select = document.getElementById('timeHour');
	for (var i = 0; i < 24; i++) {
		var option = document.createElement("option");
		option.setAttribute("value",i);
		var text = document.createTextNode(i);
		option.appendChild(text);
		select.appendChild(option);
	};

	$("#date").datepicker();
	var d = new Date();
    $("#date").datepicker("setDate",(d.getMonth()+1) +"/"+d.getDate() + "/" + d.getFullYear());

    //Adding an hour to now time for delievery
    d = new Date(d.getTime() + 1*60*60*1000); 
    
   	document.getElementById("timeHour").value = d.getHours();
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

function confirmOrder(){
	var message = new MessageBox();

	if(order === null){
		message.show(3,"Veillez activer les cookies de votre furteur");
	}
	else {
		if(document.getElementById("date").value.trim().length !== 0){
			order["date"] = document.getElementById("date").value;
			order["hour"] =	document.getElementById("timeHour").value;
			order["minute"] =	document.getElementById("timeMinute").value;

			switch(lastShippingAdresse){
				case '1':
					console.log('1');
					break;
				case '2':
					console.log('2');
					break;
				case '3':
					console.log('3');
					break;
			}
		}
		else{
			message.show(3,"Please turn on cookies of your browser");		
		}
	}
}