<?php
	$titre = "Menu";

	require_once("action/MenuAction.php");

	$action = new MenuAction();
	$action->execute();

	require_once('partial/site_header.php')
?>
	<div class="col-sm-8">
		<table class="table">
			<thead>
				<tr>
					<th>Qte</th>
					<th>Nom</th>
					<th>Description</th>
					<th>Prix</th>
				</tr>
			</thead>
			<tbody id="dishesTable">
			</tbody>
		</table>

		<div class="col-sm-offset-8 col-xs-offset-6">
			<div class="row">
				<div class="col-xs-8">
					Sous-total : 
				</div>
				<div class="col-xs-4 money">
					<span id="subTotal">0.00</span>$
				</div>
			</div>
			<div class="row">
				<div class="col-xs-8">
					TPS : 
				</div>
				<div class="col-xs-4 money">
					<span id="tps">0.00</span>$
				</div>
			</div>
			<div class="row">
				<div class="col-xs-8">
					TVQ : 
				</div>
				<div class="col-xs-4 money">
					<span id="tvq">0.00</span>$
				</div>
			</div>
			<div class="row">
				<div class="col-xs-8">
					Total : 
				</div>
				<div class="col-xs-4 money">
					<span id="total">0.00</span>$
				</div>		
			</div>
		</div>
		<div class="row form_row">
			<div class="col-sm-offset-8">
				<input type="submit" value="Passer une commande" class="btn btn-default" onclick=""/>
			</div>
		</div>
	</div>

<?php
	require_once('partial/site_footer.php');