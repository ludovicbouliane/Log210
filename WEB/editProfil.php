<?php
	$titre = "Profil";
	require_once("action/EditProfilAction.php");
	
	$action = new EditProfilAction();
	$action->execute();
	
	require_once("partial/site_header.php");

	$error = $action->getError();

?>
	<div class="col-sm-2"></div>

	<div class="col-sm-8 profil">
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

		<div class="row form_row">
			<div class="col-sm-4">Nom d'usager:</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="username" placeholder="Nom d'usager" disabled required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Prénom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="firstName" placeholder="Prénom" required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="lastName" placeholder="Nom"  required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Adresse :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="address" placeholder="Adresse" required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Ville :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="city" placeholder="Ville" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Province :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="state" placeholder="Province" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Pays :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="country" placeholder="Pays" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Code postal :</div>
			<div class="col-sm-8">
				<input type="text" maxlength=7 class="form-control" id="zipCode" placeholder="Code postal" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Numéro de téléphone <p>(555 555-5555)</p></div>
			<div class="col-sm-8">
				<input type="text" maxlength=12 class="form-control" id="phoneNumber" placeholder="Numéro de téléphone" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Date de naissance <p>(jj/mm/aaaa)</p></div>
			<div class="col-sm-8">
				<input type="text" maxlength=10 class="form-control" id="birthDate" placeholder="Date de naissance" required/>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Enregistrer" class="btn btn-default" onclick="updateClient()"/>
			</div>
		</div>
	</div>
	<div class="col-sm-2"></div>

<?php
	require_once("partial/site_footer.php");
?>

	<script>
		window.onload = getUserInfos();
	</script>