<?php
	$titre = "Accueil";
	
	require_once("action/AccueilAction.php");

	$action = new AccueilAction();
	$action->execute();

	require_once("partial/site_header.php");
?>
	<h2>Bonjour</h2>
<?php
	require_once("partial/site_footer.php");
?>