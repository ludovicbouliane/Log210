<?php
	$titre = "Modifier un restaurateur";
	
	require_once("action/EditRestaurantManagerAction.php");

	$action = new EditRestaurantManagerAction();
	$action->execute();

	require_once('partial/site_header.php');
?>

	<div class="col-sm-8 content">
		<h2> Modifier un restaurateur</h2>

		<div id="message">	</div>

		<div class="row form_row">
			<div class="col-sm-4">Prénom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="firstName" placeholder="Prénom" required/>
			</div>
		</div>
		<div class="row form_row">
			<div class="col-sm-4">Nom :</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="lastName" placeholder="Nom" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Nom d'usager</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="username" placeholder="Nom d'usager" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Mot de passe :</div>
			<div class="col-sm-8">
				<input type="password" class="form-control" id="password" placeholder="Mot de passe" required/>
			</div>
		</div>
		
		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control"> 
				</select>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Ajouter" class="btn btn-default" onclick="addReataurantManager()"/>
			</div>
		</div>
		
	</div>

<?php
	require_once("partial/site_footer.php");
?>