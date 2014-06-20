<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class OrderMenuAction extends CommonAction{

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