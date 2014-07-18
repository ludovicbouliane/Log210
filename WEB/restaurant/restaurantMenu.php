<?php
	$titre = "Menu";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php');
?>
	<div class="col-sm-8 content" id="restaurantMenuForm">
		<h2>Gérer un menu</h2>

		<div id="message"></div>

		<div class="row form_row">
			<div class="col-sm-4">Restaurant : </div>
			<div class="col-sm-8">
				<select id="listRestaurant" class="form-control" onchange="onRestaurantChanged()"> 
				</select>
			</div>
		</div>

		<div class="row form_row form-group">
			<div class="col-sm-4">Nom du menu</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="menuName" placeholder="Nom du menu" name="menuName" required/>
			</div>
		</div>


		<div class="row form_row">
			<div class="table-responsive">
				<table class="table table-stripped table-hover table-bordered">
					<thead>
						<tr>
							<th>Nom du plat</th>
							<th>Prix</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody id="dishList">

					</tbody>
				</table>
			</div>
		</div>

		<div class="row form_row  form-group">
			<div class="col-sm-4">Nom du plat</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="name" placeholder="Nom du plat" name="dishName" required/>
			</div>
		</div>

		<div class="row form_row  form-group">
			<div class="col-sm-4">Prix</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="price" placeholder="Prix" name="price"/>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-4">Description</div>
			<div class="col-sm-8">
				<textarea class="form-control" rows="3" id="description" placeholder="Description"></textarea>
			</div>
		</div>

		<div class="row form_row">
			<div class="col-sm-2 col-xs-1"></div>
			<div class="col-sm-3 col-xs-4">
				<input type="submit" value="Ajouter un plat" class="btn btn-default" id="btn_add" onclick="newDish()" />
			</div>
			<div class="col-sm-2 col-xs-1"></div>
			<div class="col-sm-3 col-xs-4">
				<input type="submit" value="Enregistrer le menu" class="btn btn-default" onclick="onSaveMenuClick()"/>
			</div>
		</div>
	</div>


<?php
	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_footer.php');
?>
<script type="text/javascript" src="/js/validator/restaurantMenuValidator.js"></script>