<?php
	$titre = "S'inscrire";
	require_once("action/RegisterAction.php");
	
	$action = new RegisterAction(false);
	$action->execute();
	
	require_once("partial/header.php");
?>
<div class="row register_page">
	<div class="col-xs-2"></div>

	<div class="col-xs-8 register">
		<h2> Créer un compte</h2>

		<form action="register.php" method="post">
			<div class="row register_row">
				<div class="col-sm-4">Nom :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			<div class="row register_row">
				<div class="col-sm-4">Prénom :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			<div class="row register_row">
				<div class="col-sm-4">Adresse :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			<div class="row register_row">
				<div class="col-sm-4">Ville :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Province :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Pays :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Code postal :</div>
				<div class="col-sm-8">
					<input type="text" maxlength=7 class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Numéro de téléphone <p>(555 555-5555)</p></div>
				<div class="col-sm-8">
					<input type="text" maxlength=12 class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Date de naissance <p>(jj/mm/aaaa)</p></div>
				<div class="col-sm-8">
					<input type="text" maxlength=10 class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Mot de passe :</div>
				<div class="col-sm-8">
					<input type="password" class="form-control"/>
				</div>
			</div>
			
			<div class="row register_row">
				<div class="col-sm-4">Confirmation de mot de passe</div>
				<div class="col-sm-8">
					<input type="password" class="form-control"/>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-4"></div>
				<div class="col-sm-8">
					<input type="submit" value="Créer" class="btn btn-default"/>
				</div>
			</div>
			
		</form>
	</div>
	<div class="col-xs-2"></div>
</div>
	
<?php
	require_once("partial/footer.php");
?>