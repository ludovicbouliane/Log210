<?php
	$titre = "Restaurant";
	require_once('action/RestaurantAction.php');

	$action = new RestaurantAction();
	$action->execute();

	require_once('partial/site_header.php');
?>

<div class="col-sm-8">
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
	require_once('partial/site_footer.php');
?>

<script>
	var restaurant = getAllRestaurant();
	var tbody = document.getElementById('allRestaurant');

	var tr ;
	var td ;
	var text;

	for (var i = 0; i < restaurant.length; i++) {
		tr = document.createElement('tr');
		td = document.createElement('td');
		text = document.createTextNode(restaurant[i]["Name"]);
		td.appendChild(text);
		tr.appendChild(td);

		td = document.createElement('td');
		text = document.createTextNode(restaurant[i]["Address"]["City"]);
		td.appendChild(text);
		tr.appendChild(td);

		td = document.createElement('td');
		var a = document.createElement('a');
		text = document.createTextNode('Voir le menu');
		a.setAttribute('href','menu?id=' + restaurant[i]["Id"])
		a.appendChild(text);
		td.appendChild(a);
		tr.appendChild(td);		

		tbody.appendChild(tr);
	};

</script>