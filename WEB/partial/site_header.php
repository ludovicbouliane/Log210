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
				<a href="accueil" class="navbar-brand">Accueil</a>
			</div>
			<div class="collapse navbar-collapse" id="navbar-collapse-1"> 
				<ul class="nav navbar-nav">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Restaurants</a>

							<ul class="dropdown-menu">
								<?php
									if($action->getAccountType() >= CommonAction::$CONTRACTOR_ACCOUNTTYPE)
									{
								?>
								<li>
									<a href="addRestaurant">Ajouter un restaurant</a>
								</li>
								<li>
									<a href="editRestaurant">Modifier un restaurant</a>
								</li>
								<li>
									<a href="deleteRestaurant">Supprimer un restaurant</a>
								</li>
								<?php
									}
								?>
							</ul>
						</li>
						<?php
							if($action->getAccountType() >= CommonAction::$CONTRACTOR_ACCOUNTTYPE)
							{
						?>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Restaurateur</a>
							<ul class="dropdown-menu">

								<li>
									<a href="addRestaurantManager">Ajouter un restaurateur</a>
								</li>
								<li>
									<a href="editRestaurantManager">Modifier un restaurateur</a>
								</li>
								<li>
									<a href="deleteRestaurantManager">Supprimer un restaurateur</a>
								</li>
							</ul>
						</li>
						<?php
							}
						?>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" id="accountLink">Mon compte</a>
						<ul class="dropdown-menu">
							<?php
								if($action->getAccountType() == CommonAction::$CLIENT_ACCOUNTTYPE || $action->getAccountType() == CommonAction::$ADMIN_ACCOUNTTYPE)
								{
							?>
								<li>
									<a href="editProfil">Modifier mon profil</a>
								</li>
							<?php
								}
							?>
							<li>
								<a href="editPassword">Modifier le mot de passe</a>
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