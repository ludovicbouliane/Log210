function Dish(parent){
	this.row = document.createElement("tr");
	this.parent = parent;
	this.active = false;
	this.info;
	var nameCol, priceCol, descCol;
	var dish = this;


	this.setInfo = function(info){
		this.info = info;

		nameCol = this.addColumn(this.info['Name']);
		priceCol = this.addColumn(this.info['Price']);
		descCol = this.addColumn(this.info['Description']);

		this.parent.appendChild(this.row);
	}

	this.addColumn = function(text){
		var column = document.createElement('td');
		var cell = document.createTextNode(text);		
		
		column.appendChild(cell);
		this.row.appendChild(column);

		return column;
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

	this.updateRow = function(){
		nameCol.innerHTML = this.info['Name'];
		priceCol.innerHTML = this.info['Price'];
		descCol.innerHTML = this.info['Description'];
	}

	this.deleteDish = function(){
		this.parent.removeChild(this.row);
	}

	this.desactivateRow = function(){
		dish.row.setAttribute("class","");		
	}
}