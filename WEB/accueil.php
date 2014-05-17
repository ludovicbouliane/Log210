<?php
	$titre = "Modifier le mot de passe";
	require_once("action/EditPasswordAction.php");
	
	$action = new EditPasswordAction(false);
	$action->execute();
	
	$error = $action->getError();

	require_once("partial/site_header.php");
?>
	<h2>Bonjour</h2>
<?php
	require_once("partial/site_footer.php");
?>