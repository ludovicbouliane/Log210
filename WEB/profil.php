<?php
	require_once('action/ProfilAction.php');

	$action = new ProfilAction(CommonAction::$PUBLIC_ACCOUNTTYPE);
	$action->execute();

	echo $action->getData();