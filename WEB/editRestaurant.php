<?php
	$titre = "Modifier un restaurant";
	
	require_once("action/EditRestaurantAction.php");

	$action = new EditRestaurantAction();
	$action->execute();

	require_once('partial/site_header.php');

?>

	<div class="col-sm-8 content" id="editRestaurantForm">
		<h2> Modifier un restaurant</h2>

		<div id="message"></div>

		<div class="row form_row form-group">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control" onchange="fillRestaurantInfos()"> 
				</select>
			</div>
		</div>

		<div class="row form_row form-group">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="name" placeholder="Nom" name="name"/>
			</div>
		</div>

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
		
		<div class="row form_row form-group">
			<div class="col-sm-4">Numéro de téléphone <p>(555 555-5555)</p></div>
			<div class="col-sm-8">
				<input type="text" maxlength=12 class="form-control" id="phoneNumber" placeholder="Numéro de téléphone" name="phoneNumber"/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Modifier" class="btn btn-default" onclick="updateRestaurant()"/>
			</div>
		</div>
	
<?php
	require_once('partial/site_footer.php');
?>

<script type="text/javascript" src="/js/validator/editRestaurantValidator.js"></script>
<script type="text/javascript">
	window.onload = fillRestaurantList(getAllRestaurantByContractor());
</script>