<template>
	<div class = "mainFooter">
		<!-- 联系我们 -->
		<div class = "footerContact">
		    <ul class="footerul">
				<li class="contacted">
					<p>
						<span>联系我们</span>
					</p>
				</li>
				<li>
					<p>
						<img src='../assets/contact_online.png'>
						<a onclick="window.open ('https://care60.live800.com/live800/chatClient/chatbox.jsp?companyID=80001164&configID=636&lan=zh&tm=1489566278790', 'newwindow', 'height=600, width=880, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')"><i class="icon icon-contact-us-service"></i>在线客服</a>
					</p>
				</li>
				<li>
					<p>
						<img src='../assets/contact_phone.png'>
						<i class="icon icon-contact-us-tel"></i>
						<span>400-999-5999</span>
					</p>
				</li>
				<li>
						<p>
							<img src='../assets/contact_email.png'>
							<i class="icon icon-contact-us-email"></i>
							<span>service@adidas.com</span>
						</p>
				</li>
				<li>
						<p>
							<img src='../assets/contact_qq.png'>
							<i class="icon icon-contact-us-email"></i>
							<span>00000000</span>
						</p>
				</li>
				<li>
					<p>
						<img src='../assets/contact_time.png'>
						<i class="icon icon-contact-us-time"></i><span>9:00-22:00</span>
					</p>
				</li>
			</ul>
  		</div>
	</div>
</template>




<style type="text/css">
	/*@media only screen and (min-width: 400px) {
	    .mainFooter {
	       height:60px;
	    }
	}
	@media only screen and (min-width: 800px) {
	    .mainFooter {
	       height:80px;
	    }
	}*/
	.mainFooter{
		position: relative;
		top: 0px;
		width: 100%;
		min-width: 1100px;
		background-color: black;
	}
	.footerContact{
		position:relative;
		left: 0px;
		right: 0px;
		height: 100%;
	}
	.footerContact ul{
		position: relative;
		/*display: block;*/
		height:80px;
    	overflow: hidden;
	}
	.footerContact ul li{
		/*margin-top: 20px;*/
		list-style:none; /* 将默认的列表符号去掉 */
		float:left;
		width: 16%;
		min-width: 180px;
		text-align: center;
		/*跟ul一样高;可以li居中*/
		line-height: 80px;
		height: 100%;
		display: inline-block;
	}
	.footerContact ul li a{
		color: white;
	}
	.footerContact ul li p img{
		width: 15px;
		margin-right: 10px;
		height:auto;
	}
	.footerContact ul li p span{
		left: 4px;
		color: white;
	}
</style>


<script type="text/javascript">
	
</script>