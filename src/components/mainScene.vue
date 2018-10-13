<template>
	<div class="mainSceneDiv">
		<ul>
			<li v-for="item in items">
				<a v-bind:href=item.url>
					<!-- vue读值: v-bind或者: -->
					<img v-bind:src=item.image>
					<!-- {{取文本值}} -->
					<p>{{item.title}}</p>
					<p class="buy">立即查看</p>
				</a>
			</li>
		</ul>
		<!-- <div id="sceneItem" v-for="item in items">
				<!-- <a href=item.url> -->
					<!-- vue读值: v-bind或者: -->
					<!-- <img v-bind:src=item.image> -->
					<!-- {{取文本值}} -->
					<!-- <p>{{item.title}}</p> -->
					<!-- <p><a v-bind:href=item.url>立即查看</a></p> -->
				<!-- </a> -->
		<!-- </div> -->
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"mainScene",
		data(){
			return{
				items:[
					{title:'男衣',
					 url:'http://www.baidu.com',
					 image:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'},
					{title:'男衣',
					 url:'http://www.baidu.com',
					 image:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'},
					{title:'男衣',
					 url:'http://www.baidu.com',
					 image:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'},
					{title:'男衣',
					 url:'http://www.baidu.com',
					 image:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'},
				],
			}
		}
	}

</script>
<style type="text/css">
	.mainSceneDiv{
		position: relative;
		/*水平居中*/
		margin: 0px auto;
		top: 80px;
		width: 1000px;
		height: auto;
	}
	.mainSceneDiv ul li{
		margin-left: 40px;
		width: 460px;
		margin-top: 40px;
		height:480px;
		/*float: left;*/
		/*float会失去点击事件*/
		display: inline-block;
	}
	.mainSceneDiv ul li p{
		text-align: center;
	}
	.buy{
		color: #0287cd;
	}
</style>