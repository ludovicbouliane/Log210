<?php
	$titre = "Profil";
	require_once("action/EditProfilAction.php");
	
	$action = new EditProfilAction();
	$action->execute();
	
	require_once("partial/site_header.php");

?>
	<div class="col-sm-8 content" id="editProfilForm">
		<h2> Modifier vos informations personnels</h2>


		<div id="message"></div>


		<div class="row form_row">
			<div class="col-sm-4">Nom d'usager:</div>
			<div class="col-sm-8">
				<p class="form-control-static" id="username">Nom d'usager</p>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Prénom :</div>
			<div class="col-sm-8">
				<p class="form-control-static" id="firstName">Prénom</p>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<p class="form-control-static" id="lastName">Nom</p>
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
		
		<div class="row form_row form-group">
			<div class="col-sm-4">Date de naissance <p>(jj/mm/aaaa)</p></div>
			<div class="col-sm-8">
				<input type="text" maxlength=10 class="form-control" id="birthDate" placeholder="Date de naissance" name="birthDate"/>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Enregistrer" class="btn btn-default" onclick="updateClient()"/>
			</div>
		</div>
	</div>

<?php
	require_once("partial/site_footer.php");
?>

<script type="text/javascript" src="/js/validator/editProfilValidator.js"></script>
<script>
	window.onload = fillProfilInfo();
</script>