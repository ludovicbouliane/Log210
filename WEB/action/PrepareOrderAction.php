<?php
	require_once($_SERVER['DOCUMENT_ROOT'] ."/action/CommonAction.php");
	
	class PrepareOrderAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE));
		}
				
		protected function executeAction(){

		}
	}