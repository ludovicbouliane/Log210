function Dish(parent){
	this.row = document.createElement("tr");
	this.parent = parent;
	this.active = false;
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
		var cell = document.createTextNode(text);		
		
		column.appendChild(cell);
		this.row.appendChild(column);
	}

	this.row.onclick = function(event){
		desactivateAllRows();
		if(dish.active === false){
			dish.row.setAttribute("class","active");
			dish.active = true;
			fillDishInfo(dish.info);
		}
		else{
			dish.row.setAttribute("class","");	
			dish.active = false;
			emptyDishInfo(dish.info);	
		}
		activateButton();
	}

	this.deleteDish = function(){
		this.parent.removeChild(this.row);
	}

	this.desactivateRow = function(){
		dish.row.setAttribute("class","");		
	}
}