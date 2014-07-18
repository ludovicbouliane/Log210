function OrderConfirmationMessageBox(){

	this.container = document.createElement('div');
	this.container.setAttribute('id','Overlay');

	this.show = function(confirmationNumber, address){
		textContainer = document.createElement('div');
		paragraphe = document.createElement('p');

		paragraphe.innerHTML = 'Numéro de confirmation : ' + confirmationNumber + '\n'
								'\n\n\n'+
								'Votre commande sera livré au :\n' +
								address["Street"] + '\n' + 
								address["City"] + ', ' + address["State"] + '\n' +
								address["Country"] + ', ' + address["ZipCode"];

		okButton = document.createElement("input");
		okButton.setAttribute("type","button");
		okButton.setAttribute("value","Ok");
		okButton.onclick = this.onOkClick;

		textContainer.appendChild(paragraphe);
		textContainer.appendChild(okButton);
		this.container.appendChild(textContainer);
		document.body.appendChild(this.container);
	}

	this.onOkClick = function(){
		document.body.removeChild(this.container);
	}

}