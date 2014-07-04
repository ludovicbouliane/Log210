<?php
	$titre = "Modifier un restaurateur";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php');
?>

	<div class="col-sm-8 content" id="editRestaurantManagerForm">
		<h2> Modifier un restaurateur</h2>

		<div id="message">	</div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurateur : </div>
			<div class="col-sm-8">
				<select id="listRestaurantManager" class="form-control" onchange="fillRestaurantManagerInfos()"> 
				</select>
			</div>
		</div>

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
		
		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control" multiple="multiple"> 
					<option value="">Aucun</option>
				</select>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Modifier" class="btn btn-default" onclick="editRestaurantManager()"/>
			</div>
		</div>
		
	</div>

<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>

<script type="text/javascript" src="/js/validator/editRestaurantManagerValidator.js"></script>

<script>
	window.onload = fillRestaurantManagerList();
</script>