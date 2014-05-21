<?php
	require_once("action/CommonAction.php");
	
	class RegisterAction extends CommonAction{

		public function __construct(){
			parent::__construct(CommonAction::$PUBLIC_ACCOUNTTYPE);
		}
				
		protected function executeAction(){
			
		}

	}