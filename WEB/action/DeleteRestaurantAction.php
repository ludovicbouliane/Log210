<?php
	require_once("action/CommonAction.php");
	
	class DeleteRestaurantAction extends CommonAction{

		public function __construct(){
			parent::__construct(CommonAction::$CONTRACTOR_ACCOUNTTYPE);
		}
				
		protected function executeAction(){

		}
	}