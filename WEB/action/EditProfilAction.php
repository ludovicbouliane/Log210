<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class EditProfilAction extends CommonAction{
	
		private $error = '';

		public function __construct(){
			parent::__construct(array(CommonAction::$CLIENT_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
				
		}

		public function getError(){
			return $this->error;
		}
	}