</div>
<?php
	require_once('footer.php');
?>
<script>
	window.onload = function(){
		document.getElementById('accountLink').innerHTML =	getUsername();
	}
</script>