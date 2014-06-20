<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class RegisterAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$PUBLIC_ACCOUNTTYPE,CommonAction::$CLIENT_ACCOUNTTYPE,CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,CommonAction::$CONTRACTOR_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
			
		}

	}