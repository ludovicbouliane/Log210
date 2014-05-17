<?php
	$titre = "Modifier le mot de passe";
	require_once("action/EditPasswordAction.php");
	
	$action = new EditPasswordAction(false);
	$action->execute();
	
	$error = $action->getError();

	require_once("partial/site_header.php");
?>
<div class="col-md-3"></div>
<div class="col-md-6">
	<h2>Modifier votre mot de passe</h2>

	<?php
		if(strlen($error) != 0){
			?>
			<div class="alert alert-danger">
				<?php echo $error; ?>
			</div>
			<?php
		}
	?>

	<form method="post" action="editpassword.php">
	<div class="row form_row">
		<div class="col-sm-4">Mot de passe :</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" name="password" placeholder="Mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4">Nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" name="newPassword" placeholder="Nouveau mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4">Confirmation du nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" name="newPassword" placeholder="Confirmation du nouveau mot de passe" required/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4"></div>
		<div class="col-sm-8">
			<button class="btn btn-default" name="submit">Enregistrer</button>
		</div>
<div class="col-md-3"></div>
<?php
	require_once("partial/site_footer.php");
?>