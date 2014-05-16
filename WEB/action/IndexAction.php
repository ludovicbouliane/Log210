<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $username = '';
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			if(isset($_POST["username"], $_POST["password"])){
				$this->username = $_POST["username"];
				//TODO send the username and the password to the api
			}
		}

		public function getError(){
			return $this->error;
		}

		public function getUsername(){
			return $this->username;
		}
	}