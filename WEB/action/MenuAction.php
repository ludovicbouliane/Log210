<?php
	require_once("action/CommonAction.php");
	
	class MenuAction extends CommonAction{

		private $restaurantId = NULL;

		public function __construct(){
			parent::__construct(array(CommonAction::$CLIENT_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
			if(isset($_GET["Id"])){
				$this->restaurantId = $_GET["Id"];
			}
			else{
				header('Location: restaurant'); 
			}
		}

		public function getRestaurantId(){
			return $this->restaurantId;
		}

	}