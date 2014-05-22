<?php
	require_once("action/CommonAction.php");
	
	class ProfilAction extends CommonAction{

		private $data = '';

		public function __construct(){
			parent::__construct(CommonAction::$CLIENT_ACCOUNTTYPE);
		}
				
		protected function executeAction(){
			if(isset($_POST["getUserId"])){
				$this->data = parent::getUserId();	
			}
		}

		public function getData(){
			return $this->data;
		}
	}