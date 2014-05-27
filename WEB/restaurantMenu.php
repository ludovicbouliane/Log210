<?php
	$titre = "Menu";
	
	//require_once("action/RestaurantMenuAction.php");

	//$action = new RestaurantMenuAction();
	//$action->execute();

	require_once('partial/site_header.php');
?>
	<div class="col-sm-2"></div>
	<div class="col-sm-8">
		<h2>Ajouter un menu</h2>

		<div class="message"></div>

		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-9">
				<select id="restaurantList"></select>
			</div>
		</div>
	</div>
	<div class="col-sm-2"></div>

<?php
	require_once('partial/site_footer.php');
?>