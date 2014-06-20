<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class DeleteRestaurantManagerAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$CONTRACTOR_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}