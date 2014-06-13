<?php
	$titre = "Commandes";
	
	require_once("action/OrderAction.php");

	$action = new OrderAction();
	$action->execute();

	require_once("partial/site_header.php");
?>
	<div class="col-sm-8 content">
		
	</div>
<?php
	require_once("partial/site_footer.php");
?>