<template lang="html">
  <div id="home">
    <section class="left_menu">
      <section class="logo_box">
        <div class="logo"></div>
        <span class="logo_title">OA管理系统</span>
        <span class="logo_en">OA  management system</span>
      </section>
      <div class="menu">
        <el-row class="tac">
          <el-col :span="8" class="w240">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
              <el-menu-item index="1"  @click = "changeRuter"><i class="fa fa-home fa-lg w24"></i>首页</el-menu-item>
              <el-menu-item index="2"  @click = "changeXietong"><i class="fa fa-home fa-lg w24"></i>协同工作</el-menu-item>
              <el-menu-item index="3"  @click = "changeZhishi"><i class="fa fa-home fa-lg w24"></i>知识社区</el-menu-item>
              <el-menu-item index="4"  @click = "changeWenhua"><i class="fa fa-home fa-lg w24"></i>文化建设</el-menu-item>
              <el-menu-item index="5"  @click = "changePersonal"><i class="fa fa-home fa-lg w24"></i>个人中心</el-menu-item>
             <el-submenu index="2">
                <template slot="title"><i class="fa fa-user-circle-o fa-lg w24"></i>客户管理</template>
                <el-menu-item index="3-1"  @click = "myclient" ><i class="fa fa-user fa-lg w24"></i>我的客户</el-menu-item>
                <el-menu-item index="3-2" @click = "addclient"><i class="fa fa-user fa-lg w24"></i>新增客户</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="fa fa-user-circle-o fa-lg w24"></i>管理部门</template>
                <el-menu-item index="3-1"  @click ="rolemanagement" ><i class="fa fa-user fa-lg w24"></i>人事人员管理</el-menu-item>
                <el-menu-item index="3-2"  @click ="rankmanagement"><i class="fa fa-user fa-lg w24"></i>销售人员管理</el-menu-item>
                <el-menu-item index="3-3"  @click ="postmanagement"><i class="fa fa-user fa-lg w24"></i>技术人员管理</el-menu-item>
                <el-menu-item index="3-4"  @click ="menumanagement"><i class="fa fa-user fa-lg w24"></i>财务人员管理</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title"><i class="fa fa-edit fa-lg w24"></i>日志信息</template>
                <el-menu-item index="4-1" @click = "med"><i class="fa fa-file-text-o fa-lg w24"></i>日志模板</el-menu-item>
                <el-menu-item index="4-2" @click = " Medmore"><i class="fa fa-file-pdf-o fa-lg w24"></i>系统日志</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title"><i class="fa fa-cube fa-lg w24"></i>系统工具</template>
                <el-menu-item index="5-1" @click = "calendarfn"><i class="fa fa-calendar-plus-o fa-lg w24"></i>系统日历</el-menu-item>
                <el-menu-item index="5-2" @click = "sendmail"><i class="fa fa-envelope-o fa-lg w24"></i>发送邮件</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </section>
    <!-- 右侧内容 -->
    <section class="right_body">
      <div class="nav">
        <span class="nav_text">您好欢迎登录OA管理系统</span>
          <ul class="nav_list">
            <li>
              <el-button type="text" class="list_top_btn" style="color:#000"><i class="fa fa-cog fa-lg w24"></i> 设置</el-button>
            </li>
            <li>
              <el-button type="text" class="list_top_btn" style="color:#000"><i class="fa fa-comments-o fa-lg w24"></i> 信息</el-button>
            </li>
            <li style="border-right:0;">
              <el-button type="text" class="list_top_btn" style="color:#000" @click = "out"><i class="fa fa-power-off fa-lg w24"></i> 退出</el-button>
            </li>
          </ul>
          <div class="show_box">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
          </div>

      </div>
    </section>
  </div>
</template>


<script>
export default {
  name:'Home',
  data(){
    return{
      msg:'haha'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      fn(){
        alert(1);
      },
      myclient(){
        this.$router.push('/List');
      },
      addclient(){
        this.$router.push('/Listtext');
      },
      rolemanagement(){
        this.$router.push('/Rolemanagement');
      },
      rankmanagement(){
        this.$router.push('/Rankmanagement');
      },
      postmanagement(){
        this.$router.push('/Postmanagement');
      },
      menumanagement(){
        this.$router.push('/Menumanagement');
      },
      changeRuter(){
        this.$router.push('/welcome');
      },
      changeXietong(){
        this.$router.push('/Collaborativework');
      },
      changeZhishi(){
        this.$router.push('/Knowledgecommunity');
      },
      changeWenhua(){
        this.$router.push('/Culturalconstruction');
      },
      changePersonal(){
        this.$router.push('/PersonalCenter');
      },
      calendarfn(){
        this.$router.push('/calendarplus');
      },
      sendmail(){
        this.$router.push('/SendEmail');
      },
      med(){
        this.$router.push('/med');
      },
      Medmore(){
        this.$router.push('/Medmore');
      },
      out(){
        this.$router.push('/');
      }
  }
}
</script>

<style lang="css">
  ul,li{
    list-style: none;
  }
  #home{
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    background-color: #1e2d3e;
  }
  .left_menu{
    width: 240px;
    /* height: 100%; */
    /*background-color: #20A0FF;*/
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #1e2d3e;
  }
  .logo_box{
    width: 100%;
    height: 180px;
    /*background-color:#f13d46 ;*/
    background: -webkit-linear-gradient(left top, #25ad9f, #4b9bfa);
  }
  .logo{
    height: 90px;
    width: 90px;
    border-radius: 120px;
    background: url(../assets/login.gif) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: calc(50% - 45px);
    top: 25px;
  }
  .logo_title{
    color:#fff;
    position: absolute;
    left:36px;
    top: 125px;
    font-size: 20px;
  }
  .logo_en{
    color:#fff;
    font-size: 10px;
    position: absolute;
    left: 37px;
    top: 145px;
    letter-spacing: 1px;
    opacity: 0.4;
  }
  .menu{
    width: 240px;
  }
  .tac{
    position: absolute;
    top: 180px;
    width: 240px;;
  }
  .w240{
    width: 240px;
  }
  .right_body{
    width: calc(100% - 240px);
    height: 100%;
    position: absolute;
    left: 240px;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }
  .nav{
    width: 100%;
    height: 64px;
    border-top:2px solid #52a1fd;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
    /*background: -webkit-linear-gradient(top, #37a0dd , #3d9eeb);*/
    justify-content: center;
    line-height: 62px;
  }
  .nav_text{
    color:#000;
    font-size: 14px;
    position: absolute;
    left:30px;
  }
  .nav_list{
    position: absolute;
    right: 0;
  }
  .nav_list li{
    height: 16px;
    line-height: 16px;
    float: left;
    margin-top: 10px;
    border-right: 1px solid #000;
    padding-left: 12px;
    padding-right: 12px;
  }
  .list_top_btn{
    float: left;
    margin-top: -8px;
  }
  .nav_list {
    display: block;
    text-decoration: none;
    color:#000;
    font-size: 14px;
  }
  .show_box{
    width: 100%;
    height: calc(100% - 62px);
    position: absolute;
    top: 62px;
  }
  .w24{
    width: 24px;
  }


</style>
