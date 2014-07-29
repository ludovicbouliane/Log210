function OrderTable(tableContainer){
	this.rows = [];
	this.tableContainer = tableContainer;

	this.addRow = function(info){
		if(info["Status"] < 3){
			var row = new OrderRow(this.tableContainer);
			row.setInfo(info);

			this.rows.push(row);
		}
	}

	this.emptyTable = function(){
		for (var i = 0; i < this.rows.length; i++) {
			this.rows[i].deleteRow();
		};
		this.rows = [];
	}
}