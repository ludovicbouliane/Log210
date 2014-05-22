<?php
	require_once('action/profilAction.php');

	$action = new ProfilAction();
	$action->execute();

	echo $action->getData();