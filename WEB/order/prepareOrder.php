<?php
	$titre = "Commandes";
	
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/GenericAction.php");

	$action = new GenericAction(array(CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE));
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_header.php");
?>
	<div class="col-sm-8">
		<div class="row form_row">
			<h2>Préparer une commande</h2>
			<label>Sélection de restaurant :</label>
			<select id="listRestaurant" onchange="restaurantChanged()"></select>
		</div>

		<div class="row form_row">
			<div class="table-responsive">
				<table class="table table-stripped table-hover table-bordered">
					<colgroup>
						<col width="*">
						<col width="*">
						<col width="100">
					</colgroup>
					<thead>
						<tr>							
							<th>Id de commande</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="OrderTable">
					</tbody>
				</table>
			</div>	
		</div>

	</div>
<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/partial/site_footer.php");
?>