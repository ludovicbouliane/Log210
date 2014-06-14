function DishTable(tableContainer,hasQte){
	this.rows = [];
	this.tableContainer = tableContainer;
	this.hasQuantity = hasQte;

	//Desactivate all rows of the dishes table
	this.desactivateAllRows = function(){
		for (var i = 0; i < this.rows.length; i++) {
			this.rows[i].desactivateRow();
		}
	}

	// Returns true if a dish is active in the table of dishes
	this.isOneRowActive = function(){
		var anyActive = false;
		for (var i = 0; i < this.rows.length; i++) {
			if(this.rows[i].active === true){
				anyActive = true;
				break;
			}
		}	

		return anyActive;
	}

	// Gets the active row in the table of dishes. If none is selected 
	//	and this is called, null will be returned. If used properlly this 
	//	method never should return null.
	this.getActiveRow = function(){
		var activeRow = null;

		for (var i = 0; i < this.rows.length; i++) {
			if(this.rows[i].active === true){
				activeRow = this.rows[i];
				break;
			}
		}	

		return activeRow;
	}

	this.addRow = function(info){
		var row = new DishRow(this.tableContainer);
		row.setInfo(info);

		this.rows.push(row);
	}

	this.emptyTable = function(){
		for (var i = 0; i < this.rows.length; i++) {
			this.rows[i].deleteRow();
		};
		this.rows = [];
	}

}