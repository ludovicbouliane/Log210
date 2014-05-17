<?php
	require_once("action/CommonAction.php");
	
	class EditPasswordAction extends CommonAction{
	
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			if(isset($_POST["submit"]))
			{
				if(isset($_POST["password"],$_POST["newPassword"],$_POST["newPasswordConfirm"]))
				{
					if(strcmp($_POST["newPassword"],$_POST["newPasswordConfirm"] == 0)){
						//TODO Send the new password to the api
					}
					else{
						$this->error = "Le nouveau mot de passes n'est pas identique";	
					}
				}	
				else{
					$this->error = "Un champs est vide";
				}
			}		
		}

		public function getError(){
			return $this->error;
		}
	}