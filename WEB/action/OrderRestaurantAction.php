<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class OrderRestaurantAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$CLIENT_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}