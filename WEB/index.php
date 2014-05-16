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
						<input type="text" class="form-control" name="username" placeholder="Nom d'usager" required/>
					</div>
				</div>
				<div class="row login_row">
					<div class="col-lg-3">
						Mot de passe : 
					</div>
					
					<div class="col-lg-9">
						<input type="password" class="form-control" name="password" placeholder="Mot de passe" required/>
					</div>
				</div>
				
				<div class="row">
					<div class="col-sm-3 login_register_link">
						<a href="register">Créer un compte</a>
					</div>
					<div class="col-sm-9">
						<input type="submit" value="Connexion" class="btn btn-default" />
					</div>
				</div>
			</form>
		</div>
	</div>
	
	<div class="col-xs-3"></div>
<?php
	require_once("partial/footer.php");
?>