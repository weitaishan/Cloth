<template>
	<div class="mainImage">
		<a href="http://www.baidu.com">
			<img src="../assets/mainImage.jpg">
		</a>
	</div>

</template>

<script type="text/javascript">


</script>

<style lang="less" type="text/less">
	@mainImageLayout:{
		position: relative;
		top: 80px;
		width: 100%;
		height: auto;
	}
	.mainImage{
		@mainImageLayout();

    img{
      width: 100%;
      height: auto;
    }
	}
	// 缩放的时候:img:height:auto; :div:height:auto;就缩放自如,比例缩放了
</style>
