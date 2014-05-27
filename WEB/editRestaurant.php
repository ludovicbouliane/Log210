<?php
	$titre = "Modifier un restaurant";
	
	require_once("action/EditRestaurantAction.php");

	$action = new EditRestaurantAction();
	$action->execute();

	require_once('partial/site_header.php');

?>
	
	<div class="col-sm-2"></div>

	<div class="col-sm-8 content">
		<h2> Modifier un restaurant</h2>

		<div id="message"></div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control" onchange="fillRestaurantInfos()"> 
				</select>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="name" placeholder="Nom" required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Adresse :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="address" placeholder="Adresse" required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Ville :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="city" placeholder="Ville" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Province :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="state" placeholder="Province" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Pays :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="country" placeholder="Pays" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Code postal :</div>
			<div class="col-sm-8">
				<input type="text" maxlength=7 class="form-control" id="zipCode" placeholder="Code postal" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Numéro de téléphone <p>(555 555-5555)</p></div>
			<div class="col-sm-8">
				<input type="text" maxlength=12 class="form-control" id="phoneNumber" placeholder="Numéro de téléphone" required/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurateur : </div>
			<div class="col-sm-8">
				<select id="listRestaurantManager" class="form-control"> 
					<option value="">Aucun</option>
				</select>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Modifier" class="btn btn-default" onclick="updateRestaurant()"/>
			</div>
		</div>

	<div class="col-sm-2"></div>	
<?php
	require_once('partial/site_footer.php');
?>
<script type="text/javascript">
	window.onload = fillRestaurantList();
</script>