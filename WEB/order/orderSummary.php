<?php
	$titre = "Résumé de la commande";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$CLIENT_ACCOUNTTYPE));
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
		<div class="row form_row">
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
		<div class="splitter"></div>
		<div class="col-xs-12">
		<div class="row form_row">
			<h4>Date et heure de livraison</h4>
			Date : <input type="text" id="date">
			Heure : 
			<select id="timeHour">
			</select>
			Minute : 
			<select id="timeMinute">
				<option value="0">0</option>
				<option value="15">15</option>
				<option value="30">30</option>
				<option value="45">45</option>
			</select>

		</div>
			<div class="row form_row">
				<h4>Adresse de livraison</h4>
				<div class="radio">
				  <label>
					<input type="radio" name="shippingAddress" value="1" checked>
					Votre adresse principale
				  </label>
				</div>
				<div class="radio">
				  <label>
				    <input type="radio" name="shippingAddress" value="2">
				    Une adresse prédéfinie
				  </label>
				  <div style="clear:both"></div>
				  <div id="prefAddress" class="hide">
				  	<select id="listPreferedAddresses"></select>
				  </div>
				</div>
				<div class="radio">
				  <label>
					<input type="radio" name="shippingAddress" value="3">
					Une nouvelle adresse
				  </label>
				  <div style="clear:both"></div>
				  <div id="newAddress" class="hide">
					  <div class="row form_row form-group">
							<div class="col-sm-4">Adresse :</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="address" placeholder="Adresse" name="address"/>
							</div>
						</div>

						<div class="row form_row form-group">
							<div class="col-sm-4">Ville :</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="city" placeholder="Ville" name="city"/>
							</div>
						</div>
						
						<div class="row form_row form-group">
							<div class="col-sm-4">Province :</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="state" placeholder="Province" name="state"/>
							</div>
						</div>
						
						<div class="row form_row form-group">
							<div class="col-sm-4">Pays :</div>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="country" placeholder="Pays" name="country"/>
							</div>
						</div>
						
						<div class="row form_row form-group">
							<div class="col-sm-4">Code postal :</div>
							<div class="col-sm-8">
								<input type="text" maxlength=7 class="form-control" id="zipCode" placeholder="Code postal" name="zipCode"/>
							</div>
						</div>
					</div>	
						
				</div>

			<div class="row form_row">
				<div class="col-sm-offset-8">
					<input type="sunmit" value="Confirmer la commande" class="btn btn-default">
				</div>
			</div>
		</div>
	</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>
<script type="text/javascript" src="/js/jquery-ui-1.10.4.custom.min.js"></script>

<script>
	$("#date").datepicker();
</script>