<?php
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
				<a href="accueil.php" class="navbar-brand">Accueil</a>
			</div>
			<div class="collapse navbar-collapse" id="navbar-collapse-1"> 
				<ul class="nav navbar-nav">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Mon compte</a>
						<ul class="dropdown-menu">
							<li>
								<a href="editprofil">Modifier mon profil</a>
							</li>
							<li>
								<a href="editpassword">Modifier le mot de passe</a>
							</li>
							<li class="divider"></li>
							<li>
								<a>Déconnexion</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>