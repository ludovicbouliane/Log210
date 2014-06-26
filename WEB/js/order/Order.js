function Order(info){
	this.id = info["Id"];
	this.status = info["Status"];

	this.getId = function(){
		return this.id;
	}

	this.getStatus = function(){
		return this.status;
	}

	this.changeStatus =function(){
		if(this.status ===1){
			this.status = 2;
		}
		else if(this.status === 2){
			this.status = 3;
		}

		if(!updateOrderStatus(this.id,this.status)){
			this.status -= 1;
		}

	}
}