<?php
	$titre = "Ajouter un restaurateur";
	
	require_once("action/AddRestaurantManagerAction.php");

	$action = new AddRestaurantManagerAction();
	$action->execute();

	require_once('partial/site_header.php');
?>

<?php
	require_once("partial/site_footer.php");
?>