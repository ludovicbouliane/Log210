<?php
	$titre = "Profil";
	require_once("action/ProfilAction.php");
	
	$action = new ProfilAction(true);
	$action->execute();
	
	require_once("partial/header.php");
	require_once("partial/site_header.php");

?>
	
<?php
	require_once("partial/footer.php");
?>