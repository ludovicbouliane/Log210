<?php
	require_once("action/CommonAction.php");
	
	class EditRestaurantAction extends CommonAction{

		public function __construct(){
			parent::__construct(array(CommonAction::$CONTRACTOR_ACCOUNTTYPE)); 
		}
				
		protected function executeAction(){

		}
	}