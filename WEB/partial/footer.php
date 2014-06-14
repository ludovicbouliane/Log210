			</div>
		</div>
		<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/js/bootstrapValidator.min.js"></script>
		<script type="text/javascript" src="/js/MessageBox.js"></script>
		<script type="text/javascript" src="/js/common.js"></script>

		<?php

			if(strpos($_SERVER["REQUEST_URI"], "RestaurantManager") !== false){
		?>
				<script type="text/javascript" src="/js/restaurantManager.js"></script>				
		<?php

			} else if(strpos(strtoupper($_SERVER["REQUEST_URI"]), "MENU") !== false ){
		?>
				<script type="text/javascript" src="/js/Dish.js"></script>
				<script type="text/javascript" src="/js/DishTable.js"></script>
				<script type="text/javascript" src="/js/DishRow.js"></script>
				<?php
					if(strpos($_SERVER["REQUEST_URI"], "restaurantMenu") !== false){
				?>
					<script type="text/javascript" src="/js/restaurantMenu.js"></script>
				<?php
					}
			} else if(strpos($_SERVER["REQUEST_URI"], "Restaurant") !== false){
		?>
				<script type="text/javascript" src="/js/restaurant.js"></script>				
		<?php
			} else if(strpos($_SERVER["REQUEST_URI"], "order") !== false){
		?>
				<script type="text/javascript" src="/js/Order.js"></script>
				<script type="text/javascript" src="/js/OrderTable.js"></script>
				<script type="text/javascript" src="/js/OrderRow.js"></script>
		<?php
			} else{
		?>
				<script type="text/javascript" src="/js/client.js"></script>		
		<?php
			}
		?>

	</body>
</html>
