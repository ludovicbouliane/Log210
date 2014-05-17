<?php
	$titre = "Connexion";
	require_once("action/IndexAction.php");
	
	$action = new IndexAction(false,"index");
	$action->execute();
	
	require_once("partial/header.php");
?>
	<div class="col-xs-3"></div>
		<div class="col-xs-6">
			<div class="col-xs-12 login">
				<form method="post" action="index.php">
					<div class="row login_row">
						<div class="col-lg-3">
							Nom d'usager : 
						</div>
						<div class="col-lg-9">
							<input type="text" class="login_input"/>
						</div>
					</div>
					<div class="row login_row">
						<div class="col-lg-3">
							Mot de passe : 
						</div>
						
						<div class="col-lg-9">
							<input type="password" class="login_input"/>
						</div>
					</div>
					
					<div class="row ">
						<div class="col-lg-6">
							<a href="register.php" class="login_register_link">Créer un compte</a>
						</div>
						<div class="col-lg-6">
							<input type="submit" value="Connection" class="login_button"/>
						</div>
						
					</div>
				</form>
			</div>
		</div>
	
	<div class="col-xs-3"></div>
<?php
	require_once("partial/footer.php");
?>