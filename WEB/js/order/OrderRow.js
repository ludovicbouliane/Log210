function OrderRow(parent){
	this.row = document.createElement("tr");
	this.parent = parent;

	this.idCol, this.statusCol;
	this.changeStatusBtn;
	
	this.order;
	
	var orderRow = this;

	this.setInfo = function(info){
		this.order = new Order(info);

		this.idCol 			 = this.addColumn(this.order.getId());
		this.statusCol 		 = this.addColumn(this.order.getStatus());
		this.changeStatusBtn = this.addColumnWithButton(this.order.getStatus());

		this.changeStatusBtn.onclick = this.onChangeStatusButtonPressed;		

		this.parent.appendChild(this.row);
	}

	this.addColumn = function(text){
		var column = document.createElement('td');
		var cell = document.createTextNode(text);		
		
		column.appendChild(cell);
		this.row.appendChild(column);

		return column;
	}

	this.addColumnWithButton = function(status){
		var column = document.createElement('td');

		var btnContent = this.getButtonContentByStatus(status);
		
		var btn = document.createElement("Input");
		btn.setAttribute("type","submit");
		btn.setAttribute("class","btn btn-default");
		
		if(btnContent !== null){
			btn.setAttribute("value",btnContent);
		}

		column.appendChild(btn);
		this.row.appendChild(column);

		return btn;
	}

	this.onChangeStatusButtonPressed = function(){
		orderRow.order.changeStatus();
		//TODO call the APi

		var status = orderRow.order.getStatus();

		var btnContent = orderRow.getButtonContentByStatus(status);
		orderRow.changeStatusBtn.setAttribute("value",btnContent);
		orderRow.statusCol.innerHTML = status;
	}
	

	this.getButtonContentByStatus = function(status){
		var content = null;

		if(status == ""){
			content = "Préparer";
		}
		else if(status == "En préparation"){
			content = "Complèter";
		}

		return content;
	}
}