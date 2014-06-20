<?php
	$titre = "Résumé de la commande";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/OrderSummaryAction.php");

	$action = new OrderSummaryAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>
	
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>