		</div>
		<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/js/common.js"></script>
		

		<?php
			if(strpos($_SERVER["REQUEST_URI"], "Restaurant") !== false){
		?>
				<script type="text/javascript" src="/js/restaurant.js"></script>				
		<?php
			} else{
		?>
				<script type="text/javascript" src="/js/client.js"></script>		
		<?php
			}
		?>

	</body>
</html>
