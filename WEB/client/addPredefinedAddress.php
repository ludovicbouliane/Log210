<?php
	$titre = "Modifier le mot de passe";
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");
	
	$action = new GenericAction(array(CommonAction::$CLIENT_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>

<div class="col-sm-8 content" id="addPredefinedAddressForm">
	<h2>Ajouter une adresse prédéfinie</h2>

	<div class="row form_row">
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

	<div class="row">
		<div class="col-sm-4"></div>
		<div class="col-sm-8">
			<input type="submit" value="Ajouter" class="btn btn-default" onclick="addPredefinedAddress()"/>
		</div>
	</div>
</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>
