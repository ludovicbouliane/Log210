<?php
	$titre = "Résumé de la commande";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/OrderSummaryAction.php");

	$action = new OrderSummaryAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>

	<div class="col-sm-8">
		<h2>Résumé de commande</h2>

		<h4>Restaurant : <span id="restaurantName"></span></h4>

		<div class="splitter"></div>

		<div class="form_row" id="orderContent">
			<div class="row">
				<div class="col-xs-3 center">Quantité</div>
				<div class="col-xs-3 left">Nom</div>
				<div class="col-xs-2 left">Prix</div>
			</div>
		</div>
		<div class="splitter"></div>
		<div class="row">
			<div class="col-sm-5">
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
		</div>
	</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>
