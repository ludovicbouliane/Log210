<?php
	$titre = "Supprimer un restaurant";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php');

?>
	<div class="col-sm-8 content">
		<h2> Supprimer un restaurant</h2>

		<div id="message"></div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control"> 
				</select>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Supprimer" class="btn btn-default" onclick="deleteRestaurant()"/>
			</div>
		</div>
	</div>
	
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_footer.php');
?>
<script type="text/javascript">
	window.onload = fillRestaurantList(getAllRestaurantByContractor());
</script>