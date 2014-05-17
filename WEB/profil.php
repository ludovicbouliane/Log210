<?php
	$titre = "Profil";
	require_once("action/ProfilAction.php");
	
	$action = new ProfilAction(false);
	$action->execute();
	
	require_once("partial/site_header.php");

?>
<div class="col-sm-3"></div>
<div class="col-sm-6">
	<div class="row form_row">
		<center>
			<button class="btn btn-default profil_link_button" onclick="location='editProfil'">Modifier vos informations personnels</button>
		</center>
	</div>
	<div class="row">
		<center>
		 	<button class="btn btn-default profil_link_button" onclick="location='editPassword'">Modifier votre mot de passe</button>
		</center>
	</div>
</div>
<div class="col-sm-3"></div>
<?php
	require_once("partial/site_footer.php");
?>