</div>
<?php
	require_once('footer.php');
?>
<script>
	var username  = getUsername();
	if(username !== ""){
		document.getElementById('accountLink').innerHTML =	username;
	}
</script>