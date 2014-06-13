function Dish(parent){
	return new Dish(parent,false);
}

function Dish(parent,hasQuantity){
	this.row = document.createElement("tr");
	this.parent = parent;
	this.active = false;
	this.info;
	this.hasQuantity = hasQuantity;
	this.nameCol, this.priceCol, this.descCol, this.qteInput;
	var dish = this;


	this.setInfo = function(info){
		this.info = info;

		if(this.hasQuantity){
			this.qteInput = this.addQteColumn();			
		}

		this.nameCol = this.addColumn(this.info['Name']);
		this.priceCol = this.addColumn(this.info['Price']);
		this.descCol = this.addColumn(this.info['Description']);

		this.parent.appendChild(this.row);
	}

	this.addColumn = function(text){
		var column = document.createElement('td');
		var cell = document.createTextNode(text);		
		
		column.appendChild(cell);
		this.row.appendChild(column);

		return column;
	}

	this.addQteColumn = function(){
		var column = document.createElement('td');
		var input = document.createElement("input");		
		
		input.setAttribute("type","text");
		input.setAttribute("value","0");
		input.setAttribute("placeholder","0");
		input.setAttribute("class","form-control dishQte");

		column.appendChild(input);
		this.row.appendChild(column);

		return input;
	}

	this.row.onclick = function(event){
		if(!hasQuantity){
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
		this.active = false;		
	}

	this.getQuantity = function(){
		return this.qteInput.value;
	}

	this.getQteInput = function(){
		return this.qteInput;
	}
}