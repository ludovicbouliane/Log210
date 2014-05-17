<?php
	$titre = "Profil";
	require_once("action/EditProfilAction.php");
	
	$action = new EditProfilAction(false);
	$action->execute();
	
	require_once("partial/site_header.php");

	$content = $action->getContent();
	$error = $action->getError();

?>
	<div class="col-xs-2"></div>

	<div class="col-xs-8 profil">
		<h2> Modifier vos informations personnels</h2>

		<?php
			if(strlen($error) != 0){
				?>
				<div class="alert alert-danger">
					<?php echo $error; ?>
				</div>
				<?php
			}
		?>

		<form action="register.php" method="post">
			<div class="row form_row">
				<div class="col-sm-4">Nom :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="lastName" placeholder="Nom"  value="<?php echo $content["lastName"];?>" required disabled/>
				</div>
			</div>
			<div class="row form_row">
				<div class="col-sm-4">Prénom :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="firstName" placeholder="Prénom" value="<?php echo $content["firstName"];?>" required disabled/>
				</div>
			</div>
			<div class="row form_row">
				<div class="col-sm-4">Adresse :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="address" placeholder="Adresse" value="<?php echo $content["address"];?>" required/>
				</div>
			</div>
			<div class="row form_row">
				<div class="col-sm-4">Ville :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="city" placeholder="Ville" value="<?php echo $content["city"];?>" required/>
				</div>
			</div>
			
			<div class="row form_row">
				<div class="col-sm-4">Province :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="state" placeholder="Province" value="<?php echo $content["state"];?>" required/>
				</div>
			</div>
			
			<div class="row form_row">
				<div class="col-sm-4">Pays :</div>
				<div class="col-sm-8">
					<input type="text" class="form-control" name="country" placeholder="Pays" value="<?php echo $content["country"];?>" required/>
				</div>
			</div>
			
			<div class="row form_row">
				<div class="col-sm-4">Code postal :</div>
				<div class="col-sm-8">
					<input type="text" maxlength=7 class="form-control" name="zipCode" placeholder="Code postal" value="<?php echo $content["zipCode"];?>" required/>
				</div>
			</div>
			
			<div class="row form_row">
				<div class="col-sm-4">Numéro de téléphone <p>(555 555-5555)</p></div>
				<div class="col-sm-8">
					<input type="text" maxlength=12 class="form-control" name="phoneNumber" placeholder="Numéro de téléphone" value="<?php echo $content["phoneNumber"];?>" required/>
				</div>
			</div>
			
			<div class="row form_row">
				<div class="col-sm-4">Date de naissance <p>(jj/mm/aaaa)</p></div>
				<div class="col-sm-8">
					<input type="text" maxlength=10 class="form-control" name="birthDate" placeholder="Date de naissance" value="<?php echo $content["birthDate"];?>" required/>
				</div>
			</div>
			
						
			<div class="row">
				<div class="col-sm-4"></div>
				<div class="col-sm-8">
					<input type="submit" value="Enregistrer" class="btn btn-default" name="submit"/>
				</div>
			</div>
			
		</form>
	</div>
	<div class="col-xs-2"></div>

<?php
	require_once("partial/site_footer.php");
?>