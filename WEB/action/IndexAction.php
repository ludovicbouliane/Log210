<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $error = '';

		public function __construct(){
			parent::__construct(CommonAction::$PUBLIC_ACCOUNTTYPE);
		}
				
		protected function executeAction(){
			if(isset($_POST["Id"])){
				//Here we should get all information about the user
				$_SESSION["Id"] = $_POST["Id"];
				
				$role =  $_POST["AccountType"];
				
				if(strcmp($role,"Client") == 0){
					$_SESSION["AccountType"] = CommonAction::$CLIENT_ACCOUNTTYPE;
				}
				else if(strcmp($role,"Restaurant Manager") == 0){
					$_SESSION["AccountType"] = CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE;
				}
				else if(strcmp($role,"Contractor") == 0){
					$_SESSION["AccountType"] = CommonAction::$CONTRACTOR_ACCOUNTTYPE;
				}
				else{
					$_SESSION["AccountType"] = CommonAction::$PUBLIC_ACCOUNTTYPE;
				}
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