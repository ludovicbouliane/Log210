<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title><?php echo $titre; ?> </title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<link href="/css/bootstrapValidator.min.css" rel="stylesheet">
		<link href="/css/common.css" rel="stylesheet" />
		<link href="/css/global.css" rel="stylesheet">

		<?php
			if(strpos($_SERVER["REQUEST_URI"], "order/menu") !== false || strpos($_SERVER["REQUEST_URI"], "order/orderSummary") !== false){
				?>
				<link href="/css/jquery-ui-1.10.4.custom.min.css" rel="stylesheet">
				<?php
			}
		?>
		
		
	</head>
	<body>
		<div class="container">