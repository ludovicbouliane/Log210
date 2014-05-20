<?php
	$titre = "Supprimer un restaurant";
	
	require_once("action/DeleteRestaurantAction.php");

	$action = new DeleteRestaurantAction(true);
	$action->execute();

	require_once('partial/site_header.php');

?>
	<div class="col-sm-2"></div>

	<div class="col-sm-8 profil">
		<h2> Supprimer un restaurant</h2>

		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control"> 
					<option value="">Restaurant</option>
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
	<div class="col-sm-2"></div>
	
<?php
	require_once('partial/site_footer.php');
?>
<script type="text/javascript">
	//window.onload = fillListRestaurant();
</script>