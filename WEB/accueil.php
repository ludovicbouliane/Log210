<?php
	$titre = "Accueil";
	
	require_once("action/AccueilAction.php");

	$action = new AccueilAction(true);

	require_once("partial/site_header.php");
?>
	<h2>Bonjour</h2>
<?php
	require_once("partial/site_footer.php");
?>