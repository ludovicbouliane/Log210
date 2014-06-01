<?php
	$titre = "Modifier le mot de passe";
	require_once("action/EditPasswordAction.php");
	
	$action = new EditPasswordAction();
	$action->execute();

	require_once("partial/site_header.php");
?>
<div class="col-sm-8 content">
	<h2>Modifier votre mot de passe</h2>

	<div id="message">
		
	</div>
	
	<div class="row form_row">
		<div class="col-sm-4">Mot de passe :</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="password" placeholder="Mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4">Nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="newPassword" placeholder="Nouveau mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4">Confirmation du nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="confirmNewPassword" placeholder="Confirmation du nouveau mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4"></div>
		<div class="col-sm-8">
			<button class="btn btn-default" onclick="updatePassword()">Enregistrer</button>
		</div>
<?php
	require_once("partial/site_footer.php");
?>