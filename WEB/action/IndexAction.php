<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);

			if(!isset($_COOKIE['username'])){
            	setcookie('username',"");
        	}
		}
				
		protected function executeAction(){
			if(isset($_POST["Id"])){
				//Here we should get all information about the user
				$_SESSION["Id"] = $_POST["Id"];
				$_SESSION["username"] = $_POST["Account"]["Username"];
				
				setcookie("username",$_POST["Account"]["Username"]);
				
			}
		}

		public function getError(){
			return $this->error;
		}

		public function getLastUsernameUsed(){
			$username = '';
			if(isset($_COOKIE["username"])){
				$username = $_COOKIE["username"];
			}

			return $username;
		}
	}