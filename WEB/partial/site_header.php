<?php
	$title = "Ajouter un restaurant";

	require_once('header.php');
?>
<div class=" row page">
	<div class="navbar navbar-static-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header"> 
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="/accueil" class="navbar-brand">Accueil</a>
			</div>
			<div class="collapse navbar-collapse" id="navbar-collapse-1"> 
				<ul class="nav navbar-nav">

					<?php
						if($action->getAccountType() == CommonAction::$CLIENT_ACCOUNTTYPE)
						{
					?>
						<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Commande</a>

						<ul class="dropdown-menu">
							
							<li>
								<a href="/client/addPredefinedAddress">Ajouter des adresses prédéfinies</a>
							</li>
							<li>
								<a href="/order/restaurant">Nouvelle commande</a>
							</li>
					</ul>
					<?php
						}
					?>

					<?php
						if($action->getAccountType() >= CommonAction::$CONTRACTOR_ACCOUNTTYPE)
						{
					?>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Restaurants</a>

						<ul class="dropdown-menu">
							
							<li>
								<a href="/restaurant/addRestaurant">Ajouter un restaurant</a>
							</li>
							<li>
								<a href="/restaurant/editRestaurant">Modifier un restaurant</a>
							</li>
							<li>
								<a href="/restaurant/deleteRestaurant">Supprimer un restaurant</a>
							</li>
						</ul>
					</li>
					
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Restaurateur</a>
						<ul class="dropdown-menu">

							<li>
								<a href="/restaurantManager/addRestaurantManager">Ajouter un restaurateur</a>
							</li>
							<li>
								<a href="/restaurantManager/editRestaurantManager">Modifier un restaurateur</a>
							</li>
							<li>
								<a href="/restaurantManager/deleteRestaurantManager">Supprimer un restaurateur</a>
							</li>
						</ul>
					</li>
					<?php
						}
						
						if($action->getAccountType() == CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE)
						{
					?>
					<li>
						<a href="/restaurant/restaurantMenu">Menu</a>
					</li>
					<li>
						<a href="/order/prepareOrder">Commande</a>
					</li>
					<?php
						}
					?>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<?php
								echo $action->getUsername();
							?>
						</a>
						<ul class="dropdown-menu">
							<?php
								if($action->getAccountType() == CommonAction::$CLIENT_ACCOUNTTYPE || $action->getAccountType() == CommonAction::$ADMIN_ACCOUNTTYPE)
								{
							?>
								<li>
									<a href="/client/editProfil">Modifier mon profil</a>
								</li>
							<?php
								}
							?>
							<li>
								<a href="/client/editPassword">Modifier le mot de passe</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="?logout=true">Déconnexion</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-sm-2"></div>