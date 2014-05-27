<?php
	$titre = "Connexion";
	require_once("action/IndexAction.php");

	$action = new IndexAction();
	$action->execute();

	require_once("partial/header.php");
?>
	<div class="col-sm-3"></div>
	<div class="col-sm-6">
		
		<div class="col-xs-12 content login">
			<div id="message"></div>

			<div class="row form_row">
				<div class="col-lg-3">
					Nom d'usager : 
				</div>
				<div class="col-lg-9">
					<input type="text" class="form-control" id="username" placeholder="Nom d'usager" tabindex="1" value="<?php echo $action->getLastUsernameUsed(); ?>" required/>
				</div>
			</div>
			<div class="row form_row">
				<div class="col-lg-3">
					Mot de passe : 
				</div>
				
				<div class="col-lg-9">
					<input type="password" class="form-control" id="password" placeholder="Mot de passe" tabindex="2" onkeyup="parseKeyUp()" required/>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-3 login_register_link">
					<a href="register" >Créer un compte</a>
				</div>
				<div class="col-lg-9">
					<input type="submit" value="Connexion" class="btn btn-default" tabindex="3" onclick="authenticate()"/>
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-sm-3"></div>
<?php
	require_once("partial/footer.php");
?>