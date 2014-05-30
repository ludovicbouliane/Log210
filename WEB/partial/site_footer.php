	<div class="col-sm-2"></div>
</div>
<?php
	require_once('footer.php');
?>
<script>
	var username = getUsername();
	if(username !== "" && typeof username !== "undefined"){
		document.getElementById('accountLink').innerHTML =	username;
	}
</script>