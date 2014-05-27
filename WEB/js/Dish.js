function Dish(parent){
	this.row = document.createElement("tr");
	this.parent = parent;
	this.info;
	var dish = this;


	this.setInfo = function(info){
		this.info = info;

		this.addColumn(this.info['Name']);
		this.addColumn(this.info['Price']);
		this.addColumn(this.info['Description']);

		this.parent.appendChild(this.row);
	}

	this.addColumn = function(text){
		var column = document.createElement('td');
		var text = document.createTextNode(this.info['Id']);		
		
		column.appendChild(text);
		this.row.appendChild(column);
	}

	this.row.onclick = function(event){
		desactivateAllRows();
		dish.row.setAttribute("class","active");
	}

	this.deleteDish = function(){
		this.parent.removeChild(this.row);
	}

	this.desactivateRow = function(){
		dish.row.setAttribute("class","");		
	}
}