<?php
	$titre = "Sélection d'un restaurant";
	require_once($_SERVER['DOCUMENT_ROOT'] .'/action/OrderRestaurantAction.php');

	$action = new OrderRestaurantAction();
	$action->execute();

	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_header.php');
?>

<div class="col-sm-8">
	<h2>Sélection d'un restaurant</h2>
	<table class="table">
		<thead>
			<tr>
				<th>Nom</th>
				<th>Ville</th>
				<th>Menu</th>
			</tr>
		</thead>
		<tbody id="allRestaurant">
		</tbody>
	</table>
</div>

<?php
	require_once($_SERVER['DOCUMENT_ROOT'] .'/partial/site_footer.php');
?>