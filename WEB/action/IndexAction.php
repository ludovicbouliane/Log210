<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class IndexAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$PUBLIC_ACCOUNTTYPE,CommonAction::$CLIENT_ACCOUNTTYPE,CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,CommonAction::$CONTRACTOR_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
			if(isset($_POST["Username"])){
				//Here we should get all information about the user
				$_SESSION["Username"] = $_POST["Username"];
				setcookie("Username",$_POST["Username"]);

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

		public function getLastUsernameUsed(){
			$username = '';
			if(isset($_COOKIE["Username"])){
				$username = $_COOKIE["Username"];
			}

			return $username;
		}
	}