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
		if(this.status == ""){
			this.status = "En préparation";
		}
		else if(this.status == "En préparation"){
			this.status = "Envoyé";
		}
	}
}