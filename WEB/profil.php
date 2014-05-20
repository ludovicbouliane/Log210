<?php
	require_once('action/profilAction.php');

	$action = new ProfilAction(true);
	$action->execute();

	echo $action->getData();