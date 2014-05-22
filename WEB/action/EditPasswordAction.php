<?php
	require_once("action/CommonAction.php");
	
	class EditPasswordAction extends CommonAction{

		public function __construct(){
			parent::__construct(CommonAction::$CLIENT_ACCOUNTTYPE);
		}
				
		protected function executeAction(){
			

		}
	}