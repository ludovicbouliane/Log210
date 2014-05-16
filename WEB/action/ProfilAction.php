<?php
	require_once("action/CommonAction.php");
	
	class ProfilAction extends CommonAction{
	
		private $error = '';
		private $content = array();

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
			// TODO retrieve real data
			$this->content["lastName"] = '';
			$this->content["firstName"] = '';
			$this->content["address"] = '';
			$this->content["city"] = '';
			$this->content["state"] = '';
			$this->content["country"] = '';
			$this->content["zipCode"] = '';
			$this->content["phoneNumber"] = '';
			$this->content["birthDate"] = '';

			
		}

		public function getError(){
			return $this->error;
		}

		public function getContent(){
			return $this->content;
		}
	}