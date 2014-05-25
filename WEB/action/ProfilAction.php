<?php
	// This Class is used to communication between php and javascript
	//  An ajax request must have a unique action identifier like "getUserId"
	//	 to respect standards.
	require_once("action/CommonAction.php");
	
	class ProfilAction extends CommonAction{

		private $data = '';

		public function __construct(){
			parent::__construct(array(CommonAction::$PUBLIC_ACCOUNTTYPE,CommonAction::$CLIENT_ACCOUNTTYPE,CommonAction::$RESTAURANTMANAGER_ACCOUNTTYPE,CommonAction::$CONTRACTOR_ACCOUNTTYPE));
		}
				
		protected function executeAction(){
			if(isset($_POST["getUserId"])){
				$this->data = parent::getUserId();	
			}
			else if(isset($_POST["encode"])){
				$this->data = sha1($_POST["Password"] . "log210");	
			}
		}

		public function getData(){
			return $this->data;
		}
	}