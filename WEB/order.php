<?php
	$titre = "Commandes";
	
	require_once("action/OrderAction.php");

	$action = new OrderAction();
	$action->execute();

	require_once("partial/site_header.php");
?>
	<div class="col-sm-8">
		<div class="row form_row">
			<div class="table-responsive">
				<table class="table table-stripped table-hover table-bordered">
					<thead>
					<tr>
						<col width="75">
						<th>Id de commande</th>
						<th>Status</th>
						<th></th>
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
	require_once("partial/site_footer.php");
?>