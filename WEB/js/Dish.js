function Dish(info){
	this.id = info["Id"];
	this.name = info["Name"];
	this.price = info["Price"];
	this.description = info["Description"];

	this.getId = function(){
		return this.id;
	}

	this.getName = function(){
		return this.name;
	}

	this.getPrice = function(){
		return parseFloat(this.price).toFixed(2);
	}
	
	this.getDescription = function(){
		return this.description;
	}

	this.updateInfo =function(info){
		this.id = info["Id"];
		this.name = info["Name"];
		this.price = info["Price"];
		this.description = info["Description"];
	}
}