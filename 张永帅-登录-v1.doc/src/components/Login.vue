<template>
  <div class="hello">
  	<div class="bigbox">
  	<div class="box"> 		
  			<p>账号<input type="text" v-model="uName"  name="uName"/></p>		
  			<p>密码<input type="text" v-model="uPwd"  name="uPwd"/></p>		
  			<p><button @click="btn">注册</button></p> <span @click="login">登录页面</span>  			
   	</div>
   	</div>
  </div>
</template>
<script>
export default {
	data(){
		return{
			uName:"",
			uPwd:""
		}
	},
  methods:{
  	btn(){
  		let uName=this.uName
  		let uPwd=this.uPwd
  		let url="http://localhost:80/vue/hello/api/test.php?uName="+uName+"&uPwd="+uPwd;
//		console.log(url)
			this.$axios.get(url)
       .then((res)=>{
					if(res.data.msg=='ok'){
            localStorage["uToken"] = res.data.token          
              this.$router.push("/Deng");
         }
					else
         {
         	alert('注册失败')
         }
       })
  	},
  	login(){
  		this.$router.push('/Deng')
  	}
  },
  created(){
  	
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{margin: 0;padding: 0;}
	html,body{width: 100%;height: 100%;}
	.hello{flex-direction: column;display: flex;text-align: center;width: 100%;height: 100%;background: url(../../public/1.png) no-repeat;background-size: 100% 100%;padding-top: 50px;}
	.bigbox{border: 5px solid #ccc;width: 500px;height: 250px;margin: 0 auto;}
	.box{width: 500px;height: 250px;margin: 0 auto;line-height: 50px;background: white;}
	.box  input{width:80%;margin-left: 10px;outline: none;}
	button{width: 35%;background: orange;color: white;border: none;outline: none;line-height: 30px;}
</style>
