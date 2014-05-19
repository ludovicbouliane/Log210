<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			if(isset($_GET["Id"])){
				//Here we should get all information about the user
				header('Location:accueil.php');

			}
		}

		public function getError(){
			return $this->error;
		}
	}