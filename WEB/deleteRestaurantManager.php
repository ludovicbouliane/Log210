<?php
	$titre = "Supprimer un restaurateur";
	
	require_once("action/DeleteRestaurantManagerAction.php");

	$action = new DeleteRestaurantManagerAction();
	$action->execute();

	require_once('partial/site_header.php');
?>

<?php
	require_once("partial/site_footer.php");
?>