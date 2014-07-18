<?php
	$titre = "Menu";

	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/OrderMenuAction.php");

	$action = new OrderMenuAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php')
?>
	<div class="col-sm-8">
		<h2>Sélectionner des plats</h2>
		<div id="message"></div>

		<div class="row form_row">
			<div class="table-responsive">
				<table class="table table-stripped table-hover table-bordered">
					<colgroup>
						<col width="75">
						<col width="*">
						<col width="75">
						<col width="*">
					</colgroup>
					<thead>
						<tr>
						
							<th class="qteHeader">Quantité</th>
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
				<input type="submit" value="Passer une commande" class="btn btn-default" onclick="createOrder()"/>
			</div>
		</div>
	</div>

<?php
	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_footer.php');
?>

<script type="text/javascript" src="/js/jquery-ui-1.10.4.custom.min.js"></script>
<script type="text/javascript" src="/js/orderMenu.js"></script>

<script type="text/javascript">
	window.onload= function(){
		fillDishTable();
		$('.spinner').spinner({min : 0});
		$('.spinner').value = 0;

		$('.ui-spinner-button').click(function() {
   			updateTotal();
		});
	}
</script>