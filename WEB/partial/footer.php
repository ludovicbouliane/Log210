			</div>
		</div>
		<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/js/bootstrapValidator.min.js"></script>
		<script type="text/javascript" src="/js/MessageBox.js"></script>
		<script type="text/javascript" src="/js/common.js"></script>

		<?php
			// Manage restaurant manager pages
			if(strpos($_SERVER["REQUEST_URI"], "RestaurantManager") !== false){
		?>
				<script type="text/javascript" src="/js/restaurantManager.js"></script>				
		<?php
			// for all pages related to the menu
			}
			else if(strpos($_SERVER["REQUEST_URI"], "addPredefinedAddress") !== false){
		?>
				<script type="text/javascript" src="/js/addPredefinedAddress.js"></script>
		<?php
			}
			else if(strpos(strtoupper($_SERVER["REQUEST_URI"]), "MENU") !== false ){
		?>
				<script type="text/javascript" src="/js/dish/Dish.js"></script>
				<script type="text/javascript" src="/js/dish/DishTable.js"></script>
				<script type="text/javascript" src="/js/dish/DishRow.js"></script>
		<?php
					// for the page managning the menu of a restaurant
					if(strpos($_SERVER["REQUEST_URI"], "restaurantMenu") !== false){
		?>
					<script type="text/javascript" src="/js/restaurantMenu.js"></script>
		<?php
					}
			// manage restaurant pages		
			} 
			else if(strpos($_SERVER["REQUEST_URI"], "restaurant") !== false){
		?>
				<script type="text/javascript" src="/js/restaurant.js"></script>				
		<?php
			// prepare order page
			} else if(strpos($_SERVER["REQUEST_URI"], "order") !== false){

				if(strpos($_SERVER["REQUEST_URI"], "orderSummary")){
		?>
						<script type="text/javascript" src="/js/orderSummary.js"></script>
				<?php
				}
				else{
				?>
					<script type="text/javascript" src="/js/order/Order.js"></script>
					<script type="text/javascript" src="/js/order/OrderTable.js"></script>
					<script type="text/javascript" src="/js/order/OrderRow.js"></script>
					<script type="text/javascript" src="/js/prepareOrder.js"></script>
		<?php
				}
			//any other page
			} else{
		?>
				<script type="text/javascript" src="/js/client.js"></script>		
		<?php
			}
		?>

	</body>
</html>
