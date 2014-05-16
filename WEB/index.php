<?php
	$titre = "Accueil";
	require_once("action/IndexAction.php");
	
	$action = new IndexAction(false);
	$action->execute();
	
	require_once("partial/header.php");
?>
	<h1> Accueil </h1>
<?php
	require_once("partial/footer.php");
?>