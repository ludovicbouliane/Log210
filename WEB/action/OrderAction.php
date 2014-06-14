<?php
	require_once("action/CommonAction.php");
	
	class OrderAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}