<?php
	require_once("action/CommonAction.php");
	
	class ProfilAction extends CommonAction{

		private $data = '';

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			if(isset($_POST["getUsername"])){
				$this->data = parent::getUsername();
			}
			else if(isset($_POST["getUserId"])){
				$this->data = parent::getUserId();	
			}
		}

		public function getData(){
			return $this->data;
		}
	}