<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			if(isset($_POST["Id"])){
				//Here we should get all information about the user
				$_SESSION["Id"] = $_POST["Id"];
				$_SESSION["username"] = $_POST["Account"]["Username"];
			}
		}

		public function getError(){
			return $this->error;
		}
	}