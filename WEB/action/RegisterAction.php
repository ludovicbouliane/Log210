<?php
	require_once("action/CommonAction.php");
	
	class RegisterAction extends CommonAction{
		
		private $content = array();
		private $error = "";



		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			$this->content["lastName"] = '';
			$this->content["firstName"] = '';
			$this->content["address"] = '';
			$this->content["city"] = '';
			$this->content["state"] = '';
			$this->content["country"] = '';
			$this->content["zipCode"] = '';
			$this->content["phoneNumber"] = '';
			$this->content["birthDate"] = '';

			if(isset($_POST["submit"])){



				//validate the name
				if(isset($_POST["lastName"],$_POST["firstName"])){
					$this->content["lastName"] = $_POST["lastName"];
					$this->content["firstName"] = $_POST["firstName"];
				}
				else{
					$this->error = "Le nom ou le prénom n'est pas présent";

				}

				//validate the address
				if(isset($_POST["address"],$_POST["city"],
						 $_POST["state"],$_POST["country"],
						 $_POST["zipCode"])){

					$this->content["address"] = $_POST["address"];
					$this->content["city"] = $_POST["city"];
					$this->content["state"] = $_POST["state"];
					$this->content["country"] = $_POST["country"];
					$this->content["zipCode"] = $_POST["zipCode"];
				}
				else{
					if(strlen($this->error) == 0){
						$this->error = "L'adresse n'est pas présente";
					}
				}

				//Validate the phone number
				if(isset($_POST["phoneNumber"]))
				{
					//TODO add validation of phone number with a regex
					$this->content["phoneNumber"] = $_POST["phoneNumber"];	
				}	
				else{
					if(strlen($this->error) == 0){
						$this->error = "Le numéro de téléphone n'est pas présent";	
					}
				}
					

				//validate the birth date
				if(isset($_POST["birthDate"])){
					// TODO Validate that it is a valid date
					$this->content["birthDate"] = $_POST["birthDate"];	
				}
				else{
					if(strlen($this->error) == 0){
						$this->error = "La date de naissance n'est pas prétente";
					}
				}


				//validate both passwords
				if(isset($_POST["password"],$_POST["confirmPassword"])){
					if(strcmp($_POST["password"] , $_POST["confirmPassword"]) == 0){
						//TODO encrypt password
					}
					else{
						if(strlen($this->error) == 0){
							$this->error = "Les mots de passes ne sont pas identiques";
						}
					}

				}
				else {
					if(strlen($this->error) == 0){
						$this->error = "Aucun mot de passe présent";
					}
				}			


				if(strlen($this->error) == 0){
					//TODO Send all informations to the api
				}
			}
		}


		public function getError(){
			return $this->error;
		}

		public function getContent(){
			return $this->content;
		}		
	}