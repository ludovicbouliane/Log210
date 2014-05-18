<?php
	require_once("action/CommonAction.php");
	
	class RegisterAction extends CommonAction{

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			
		}

	}