<?php
	session_start();

	abstract class CommonAction{
		private $isAuthentifiedRequired;

		public function __construct($isAuthentifiedRequired){
			$this->isAuthentifiedRequired = $isAuthentifiedRequired;
		}

		public function execute(){
			//If the user logs out, we flush all data about him
			if(isset($_GET["logout"])){
				session_unset();
				session_destroy();
				session_start();
			}
		
			//If the page requires the user to be authenticated to see it
			if($this->isAuthentifiedRequired){
				// If the user is not authenticated and he should be, 
				//  we send him back to the connection window.
				if($this->isLoggedIn() == false){
					header("location:index");
				}
			}
			
			$this->executeAction();
		}

		protected abstract function executeAction();
		
		public function isLoggedIn(){
			return isset($_SESSION["Id"]);
		}

		public function getUserId(){
			return $_SESSION["Id"];
		}

		public function getUsername(){
			$username = '';
			
			if(isset($_SESSION["username"])){
				$username = $_SESSION["username"];
			}
			
			return $username;
		}
	}