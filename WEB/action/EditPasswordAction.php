<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class EditPasswordAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$CLIENT_ACCOUNTTYPE,CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,CommonAction::$CONTRACTOR_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
			

		}
	}