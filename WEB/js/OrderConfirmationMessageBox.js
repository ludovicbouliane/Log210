function OrderConfirmationMessageBox(){

	this.container = document.createElement('div');
	this.container.setAttribute('id','Overlay');

	this.fadeDiv = document.createElement('div');
	this.fadeDiv.setAttribute('class','fadeDiv');

	var thisObject = this;

	this.show = function(confirmationNumber, address, callback){
		textContainer = document.createElement('div');
		textContainer.setAttribute('class',"innerOverlay");
		paragraphe = document.createElement('p');

		paragraphe.innerHTML = 	'<h3>Confirmation de commande</h3>' + 
								'<h4>Numéro de confirmation :</h4>' + '<div class="messageInfo">' + confirmationNumber + '</div><br>' +
								'<h4>Votre commande sera livré au :</h4><div class="messageInfo">' +
								address["Street"] + '<br>' + 
								address["City"] + ', ' + address["State"] + '<br>' +
								address["Country"] + ', ' + address["ZipCode"] + '</div>';

		okButton = document.createElement("input");
		okButton.setAttribute("type","button");
		okButton.setAttribute("value","Ok");

		textContainer.appendChild(paragraphe);
		textContainer.appendChild(okButton);
		this.container.appendChild(textContainer);
		document.body.appendChild(this.fadeDiv);
		document.body.appendChild(this.container);

		okButton.onclick = function(){
			document.body.removeChild(thisObject.container);
			document.body.removeChild(thisObject.fadeDiv);
			callback();
		}
	}
}