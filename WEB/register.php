<?php
	$titre = "S'inscrire";
	require_once("action/GenericAction.php");
	
	$action = new GenericAction(array(CommonAction::$PUBLIC_ACCOUNTTYPE,
									  CommonAction::$CLIENT_ACCOUNTTYPE,
									  CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,
									  CommonAction::$CONTRACTOR_ACCOUNTTYPE));
	$action->execute();

	require_once("partial/header.php");
?>
<div class="col-xs-12 page">

	<div class="col-sm-2"></div>

	<div class="col-sm-8 content register" id="registerForm">
		<h2> Créer un compte</h2>

		<div id="message">	</div>

		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="firstName">Prénom :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="firstName" placeholder="Prénom" name="firstName"/>
			</div>
		</div>
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="lastName">Nom :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="lastName" placeholder="Nom" name="lastName"/>
			</div>
		</div>
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="address">Adresse :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="address" placeholder="Adresse" name="address"/>
			</div>
		</div>
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="city">Ville :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="city" placeholder="Ville" name="city"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="state">Province :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="state" placeholder="Province" name="state"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="country">Pays :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="country" placeholder="Pays" name="country"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="zipCode">Code postal :</label>
			</div>
			<div class="col-sm-8">
				<input type="text" maxlength=7 class="form-control" id="zipCode" placeholder="Code postal" name="zipCode"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="phoneNumber">Numéro de téléphone <p>(555 555-5555)</p></label>
			</div>
			<div class="col-sm-8">
				<input type="text" maxlength=12 class="form-control" id="phoneNumber" placeholder="Numéro de téléphone" name="phoneNumber"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="birthDate">Date de naissance <p>(jj/mm/aaaa)</p></label>
			</div>
			<div class="col-sm-8">
				<input type="text" maxlength=10 class="form-control" id="birthDate" placeholder="Date de naissance" name="birthDate"/>
			</div>
		</div>

		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="email">Adresse courriel</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="email" placeholder="Adresse courriel" name="email"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="username">Nom d'usager</label>
			</div>
			<div class="col-sm-8">
				<input type="text" class="form-control" id="username" placeholder="Nom d'usager" name="username"/>
			</div>
		</div>
		
		<div class="row form_row form-group">
			<div class="col-sm-4">
				<label for="password">Mot de passe :</label>
			</div>
			<div class="col-sm-8">
				<input type="password" class="form-control" id="password" placeholder="Mot de passe" name="password"/>
			</div>
		</div>
		
		<div class="row">
			<div class="col-sm-4"></div>
			<div class="col-sm-8">
				<input type="submit" value="Créer" class="btn btn-default" onclick="register()"/>
			</div>
		</div>
		
	</div>
	<div class="col-sm-2"></div>
</div>
	
<?php
	require_once("partial/footer.php");
?>

<script type="text/javascript" src="/js/validator/registerValidator.js"></script>