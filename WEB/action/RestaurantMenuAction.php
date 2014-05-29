<?php
	require_once("action/CommonAction.php");
	
	class RestaurantMenuAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}