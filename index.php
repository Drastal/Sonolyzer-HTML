<?php include('included/header.php');?>
<div class="main">
	<?php include('included/fileManager.php');?>

	<div class="panels">
		<aside class="left">
			<?php include('included/filters.php');?>
			<?php //include('included/export.php');?>
		</aside>

		<aside class="right">
			<?php include('included/player.php');?>
			<?php include('included/spectrum.php');?>
			<?php include('included/platine.php');?>
		</aside>
	</div>
</div>
<?php include('included/footer.php');?>