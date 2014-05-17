<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){

		}
	}