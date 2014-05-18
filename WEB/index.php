<?php
	$titre = "Connexion";
	require_once("action/IndexAction.php");
	
	$action = new IndexAction(false,"index");
	$action->execute();

	$error = $action->getError();

	require_once("partial/header.php");
?>
	<div class="col-xs-3"></div>
	<div class="col-xs-6">
		
		<div class="alert alert-danger">
			<?php echo $error; ?>
		</div>
		
		<div class="col-xs-12 login">
			<div class="row form_row">
				<div class="col-lg-3">
					Nom d'usager : 
				</div>
				<div class="col-lg-9">
					<input type="text" class="form-control" id="username" placeholder="Nom d'usager" required/>
				</div>
			</div>
			<div class="row form_row">
				<div class="col-lg-3">
					Mot de passe : 
				</div>
				
				<div class="col-lg-9">
					<input type="password" class="form-control" id="password" placeholder="Mot de passe" required/>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-3 login_register_link">
					<a href="register">Créer un compte</a>
				</div>
				<div class="col-sm-9">
					<input type="submit" value="Connexion" class="btn btn-default" onclick="authenticate()"/>
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-xs-3"></div>
<?php
	require_once("partial/footer.php");
?>