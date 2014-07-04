<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class GenericAction extends CommonAction{

		public function __construct($permission){
			parent::__construct($permission);
		}
				
		protected function executeAction(){

		}
	}