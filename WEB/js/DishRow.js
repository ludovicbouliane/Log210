function DishRow(parent,hasQuantity){

	this.row = document.createElement("tr");
	this.parent = parent;
	//Is the row active
	this.active = false;
	//If true a qte column is added
	this.hasQuantity = hasQuantity;
	//Column of the row
	this.nameCol, this.priceCol, this.descCol, this.qteInput;
	//dish information
	this.dish;
	//self object
	var dishRow = this;


	this.setInfo = function(info){
		this.dish = new Dish(info);

		if(this.hasQuantity){
			this.qteInput = this.addQteColumn();			
		}

		this.nameCol = this.addColumn(this.dish.getName());
		this.priceCol = this.addColumn(this.dish.getPrice());
		this.descCol = this.addColumn(this.dish.getDescription());

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
			if(dishRow.active === false){
				dishRow.row.setAttribute("class","active");
				dishRow.active = true;
				fillDishInfo(dishRow.dish);
			}
			else{
				dishRow.row.setAttribute("class","");	
				dishRow.active = false;
				emptyDishInfo(dishRow.dish);	
			}
			activateButton();
		}
	}

	this.updateRow = function(){
		this.nameCol.innerHTML = this.dish.getName();
		this.priceCol.innerHTML = this.dish.getPrice();
		this.descCol.innerHTML = this.dish.getDescription();
	}

	this.deleteRow = function(){
		this.parent.removeChild(this.row);
	}

	this.desactivateRow = function(){
		dishRow.row.setAttribute("class","");
		this.active = false;		
	}

	this.getQuantity = function(){
		return this.qteInput.value;
	}

	this.getQteInput = function(){
		return this.qteInput;
	}
}