 <?php
	require_once("action/CommonAction.php");
	
	class ProfilAction extends CommonAction{

		public function __construct($isAuthenticatedRequired){
			parent::__construct($isAuthenticatedRequired);
		}
				
		protected function executeAction(){
		
		}

		public function getError(){
			return $this->error;
		}

		public function getContent(){
			
		}
	}