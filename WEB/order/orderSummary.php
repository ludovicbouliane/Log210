<?php
	$titre = "Résumé de la commande";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/OrderSummaryAction.php");

	$action = new OrderSummaryAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>
	<script>
		var cookies = document.cookie.split(";");
		var order = null;
		for (var i = 0; i < cookies.length; i++) {
			if(cookies[i].indexOf("order=") === 0){
				order = JSON.parse(cookies[i].substring(6));
				break;
			}
		};
	</script>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>