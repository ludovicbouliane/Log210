<?php
	$titre = "Accueil";
	
	require_once("action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$CLIENT_ACCOUNTTYPE,
									  CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,
									  CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once("partial/site_header.php");
?>
	<div class="col-sm-8 content">
		<h2>Bonjour</h2>
	</div>
<?php
	require_once("partial/site_footer.php");
?>