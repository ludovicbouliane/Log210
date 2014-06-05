<?php
	require_once("action/CommonAction.php");
	
	class RestaurantAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$CLIENT_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}