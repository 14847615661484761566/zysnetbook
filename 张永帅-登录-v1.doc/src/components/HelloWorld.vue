<template>
  <div class="hellos">
   	<div class="topnav">
   		导航
   	</div>
   	<div class="bottombox">
   		<div class="leftbox">
   				用户管理
   		</div>
   		<div class="rightbox">
   				<table border="1" cellspacing="0">
   					<thead>
   						<tr>
   							<td>id</td>
   							<td>名字</td>
   							<td>密码</td>
   						</tr>
   					</thead>
   					<tbody>
   						<tr>
   							<td></td>
   						</tr>
   					</tbody>
   				</table>
   		</div>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hellos{width: 100%;height: 100%;display: flex;flex-direction: column;}
	.topnav{width: 100%;height: 100px;background: black;text-align: center;line-height: 100px;color: white;font-size: 20px;}
	.bottombox{width: 100%;display: flex;height: 100%;flex: 1;}
	.leftbox{width: 100px;background: #ccc;}
	.rightbox{flex: 1;}
	table{width: 100%;}
</style>
