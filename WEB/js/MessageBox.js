function MessageBox(){
	
	this.MSG_TYPE_SUCCESS = 1;
	this.MSG_TYPE_WARNING = 2;
	this.MSG_TYPE_ERROR   = 3;

	this.container = document.getElementById('message');
	var me = this;

	this.show = function(msgType,message){
		//Empties the div before adding content
		while (this.container.hasChildNodes()) {
		   this.container.removeChild(this.container.lastChild);
		}

		var msg = document.createTextNode(message);

		if(msgType == this.MSG_TYPE_SUCCESS){
			this.container.setAttribute("class", "alert alert-success");
		}
		else if(msgType == this.MSG_TYPE_WARNING){
			this.container.setAttribute("class", "alert alert-warning");
		}
		else if(msgType == this.MSG_TYPE_ERROR){
			this.container.setAttribute("class", "alert alert-danger");
		}

		this.container.appendChild(msg);

		$('#message').animate({
			opacity:1	
		},1000,function(){
			setTimeout(me.hide,2000);	
		});
	}

	this.hide = function(){
		$('#message').animate({
			opacity:0	
		},1000,function(){
			while (me.container.hasChildNodes()) {
		 	   me.container.removeChild(me.container.lastChild);
			}
			me.container.setAttribute("class","");
		});
	}	

}