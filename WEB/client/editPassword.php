<?php
	$titre = "Modifier le mot de passe";
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");
	
	$action = new GenericAction(array(CommonAction::$CLIENT_ACCOUNTTYPE,
							   		  CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,
									  CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>
<div class="col-sm-8 content" id="editPasswordForm">
	<h2>Modifier votre mot de passe</h2>

	<div id="message">
		
	</div>
	
	<div class="row form_row form-group">
		<div class="col-sm-4">Mot de passe :</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="password" placeholder="Mot de passe" name="password"/>
		</div>
	</div>

	<div class="row form_row form-group">
		<div class="col-sm-4">Nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="newPassword" placeholder="Nouveau mot de passe" name="newPassword"/>
		</div>
	</div>

	<div class="row form_row form-group">
		<div class="col-sm-4">Confirmation du nouveau mot de passe</div>
		<div class="col-sm-8">
			<input type="password" class="form-control" id="confirmNewPassword" placeholder="Confirmation du nouveau mot de passe" name="confirmNewPassword"/>
		</div>
	</div>

	<div class="row form_row">
		<div class="col-sm-4"></div>
		<div class="col-sm-8">
			<input type="submit" value="Enregistrer" class="btn btn-default" onclick="updatePassword()"/>
		</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>

<script type="text/javascript" src="/js/validator/editPasswordValidator.js"></script>