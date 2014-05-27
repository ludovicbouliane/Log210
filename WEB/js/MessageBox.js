function MessageBox(){
	
	var MSG_TYPE_SUCCESS = 1;
	var MSG_TYPE_WARNING = 2;
	var MSG_TYPE_ERROR   = 3;

	var container = document.getElementById('message');
	var me = this;

	this.show = function(msgType,message){
		var msg = document.createTextNode(message);

		if(msgType == MSG_TYPE_SUCCESS){
			container.setAttribute("class", "alert alert-success");
		}
		else if(msgType == MSG_TYPE_WARNING){
			container.setAttribute("class", "alert alert-warning");
		}
		else if(msgType == MSG_TYPE_ERROR){
			container.setAttribute("class", "alert alert-danger");
		}

		container.appendChild(msg);

		$('#message').animate({
			opacity:1	
		},1000,function(){
			setTimeout(me.hide,2000);	
		});
	}

	this.hide = function(){
		console.log('here');
		$('#message').animate({
			opacity:0	
		},1000,function(){
			while (container.hasChildNodes()) {
		 	   container.removeChild(container.lastChild);
			}
			container.setAttribute("class","");
		});
	}	

}