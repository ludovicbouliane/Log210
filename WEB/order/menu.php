<?php
	$titre = "Menu";

	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/OrderMenuAction.php");

	$action = new OrderMenuAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php')
?>
	<div class="col-sm-8">
		<div class="row form_row">
			<div class="table-responsive">
				<table class="table table-stripped table-hover table-bordered">
					<thead>
					<tr>
						<col width="75">
						<th class="qteHeader">Qte</th>
						<th>Nom</th>
						<th>Prix</th>
						<th>Description</th>
					</tr>
					</thead>
					<tbody id="dishesTable">
					</tbody>
				</table>
			</div>	
		</div>

		<div class="col-sm-offset-8 col-xs-offset-6">
			<div class="col-xs-8">
				Sous-total : 
			</div>
			<div class="col-xs-4 money">
				<span id="subTotal">0.00</span>
			</div>
			<div class="col-xs-8">
				TPS : 
			</div>
			<div class="col-xs-4 money">
				<span id="tps">0.00</span>
			</div>
	
			<div class="col-xs-8">
				TVQ : 
			</div>
			<div class="col-xs-4 money">
				<span id="tvq">0.00</span>
			</div>

			<div class="col-xs-8">
				Total : 
			</div>
			<div class="col-xs-4 money">
				<span id="total">0.00</span>
			</div>
		</div>
		<div class="row form_row">
			<div class="col-sm-offset-8">
				<input type="submit" value="Passer une commande" class="btn btn-default" onclick=""/>
			</div>
		</div>
	</div>

<?php
	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_footer.php');
?>

<script type="text/javascript">
	var restaurantId = '';
	var menu = '';
	var dishes = [];

	var TPS = 0.05;
	var TVQ = 0.09975;
	
	function updateTotal(){
		var subtotal = 0;
		for (var i = 0; i < dishes.length; i++) {
			subtotal += dishes[i].getQuantity() * dishes[i].dish.getPrice();
		};

		var tempTps = subtotal * TPS;
		var tempTvq = subtotal * TVQ;
		var total = subtotal + tempTps + tempTvq;

		document.getElementById('subTotal').innerHTML = subtotal.toFixed(2);
		document.getElementById('tps').innerHTML = tempTps.toFixed(2);
		document.getElementById('tvq').innerHTML = tempTvq.toFixed(2);
		document.getElementById('total').innerHTML = total.toFixed(2);
	}
	
	function fillDishTable(){
		if(window.location.search.indexOf('?Id=') == 0){
			restaurantId = window.location.search.substring(4);
			
			menu = getMenuFromRestaurantId(restaurantId);

			if(menu === null){
				window.location="restaurant";
			}
			else{
				dishes = getDishesFromMenuId(menu["Id"]);

				var dishTable = new DishTable(document.getElementById("dishesTable"),true);
				for (var i = 0; i < dishes.length; i++) {
					var row = dishTable.addRow(dishes[i]);
					var input = row.getQteInput();
					input.onchange = function(){
						updateTotal();
					}

					dishes[i] = row;
				};
			}
		}
	}

	window.onload=fillDishTable();


</script>