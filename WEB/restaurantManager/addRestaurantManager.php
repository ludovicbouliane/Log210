<?php
	$titre = "Ajouter un restaurateur";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php');
?>
	<div class="col-sm-8 content" id="addRestaurantManagerForm">
		<h2> Ajouter un restaurateur</h2>

		<div id="message">	</div>

		<div class="row form_row form-group">
			<div class="col-sm-4">Prénom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="firstName" placeholder="Prénom" name="firstName"/>
			</div>
		</div>
		<div class="row form_row form-group">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="lastName" placeholder="Nom" name="lastName"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">Nom d'usager</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="username" placeholder="Nom d'usager" name="username"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">Mot de passe :</div>
			<div class="col-sm-8">
				<input type="password" class="form-control" id="password" placeholder="Mot de passe" name="password"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control" multiple="multiple"> 
				</select>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-4 form-group"></div>
			<div class="col-sm-8">
				<input type="submit" value="Ajouter" class="btn btn-default" onclick="addRestaurantManager()"/>
			</div>
		</div>
		
	</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>

<script type="text/javascript" src="/js/validator/addRestaurantManagerValidator.js"></script>

<script>
	document.getElementById('listRestaurant').setAttribute('size',fillRestaurantList(getAllRestaurantByContractor()));
</script>