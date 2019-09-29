<template>
	<div class="hello">
		<div class="bigbox">
	  	<div class="box"> 		
	  			<p>账号<input type="text" v-model="uName"  name="uName"/></p>		
	  			<p>密码<input type="text" v-model="uPwd"  name="uPwd"/></p>		
	  			<p>验证<input type="text"/><button class="yzm">获取验证码</button></p>	
	  			<p><button @click="btn">登录</button></p>  		<span @click="logins">注册页面</span>	
	   	</div>
	   	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				uName:"",
				uPwd:""
			}
		},
		methods:{
			btn(){
				this.$router.push('/HelloWorld')
			},
		  	logins(){
		  		this.$router.push('/')
		  	}
		}
	}
</script>

<style>
	*{margin: 0;padding: 0;}
	html,body{width: 100%;height: 100%;}
	.hello{flex-direction: column;display: flex;text-align: center;width: 100%;height: 100%;background: url(../../public/1.png) no-repeat;background-size: 100% 100%;padding-top: 50px;}
	.bigbox{border: 5px solid #ccc;width: 500px;height: 250px;margin: 0 auto;}
	.box{width: 500px;height: 250px;margin: 0 auto;line-height: 50px;background: white;}
	.box  input{width:80%;margin-left: 10px;outline: none;}
	button{width: 35%;background: orange;color: white;border: none;outline: none;line-height: 30px;}
</style>