<?php
	require_once("action/CommonAction.php");
	
	class IndexAction extends CommonAction{
	
		private $error = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){

		}

		public function getError(){
			return $this->error;
		}
	}