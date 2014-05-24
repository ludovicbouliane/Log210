<?php
	$titre = "Modifier un restaurateur";
	
	require_once("action/EditRestaurantManagerAction.php");

	$action = new EditRestaurantManagerAction();
	$action->execute();

	require_once('partial/site_header.php');
?>

<?php
	require_once("partial/site_footer.php");
?>