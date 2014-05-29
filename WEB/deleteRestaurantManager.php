<?php
	$titre = "Supprimer un restaurateur";
	
	require_once("action/DeleteRestaurantManagerAction.php");

	$action = new DeleteRestaurantManagerAction();
	$action->execute();

	require_once('partial/site_header.php');
?>
	<div class="col-sm-2"></div>

	<div class="col-sm-8 content">
		<h2> Supprimer un restaurateur</h2>

		<div id="message"></div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurateur : </div>
			<div class="col-sm-8">
				<select id="listRestaurantManager" class="form-control"> 
				</select>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Supprimer" class="btn btn-default" onclick="deleteRestaurantManager()"/>
			</div>
		</div>
	</div>
	<div class="col-sm-2"></div>
<?php
	require_once("partial/site_footer.php");
?>

<script>
	fillRestaurantManagerList();
</script>