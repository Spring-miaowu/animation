<template lang="html">
    <div class="knowledge">
        <div class="knowledge-left">
           <el-card class="box-card">
            <div class="box-card-top">
                <div class="box-top">
                    <div class="box-top-left">
                    </div>
                <!-- <span>我分享了0文档</span> -->
                </div>
                <div class="box-top-right">
                     <el-button size="small" type="primary" round>我要分享</el-button>
                    <el-button  size="small" type="success" round>去知识广场</el-button>
                    <el-button  size="small" type="info" round>去文档中心</el-button>
                </div>
            </div>
            <div class="box-card-middle">
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的喜欢" name="first">
                         <div>
                            <ul>
                                <li>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</li>
                                <li>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</li>
                                <li>头上一片晴天，心中一个想念</li>
                                <li>为了无法计算的价值</li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="评论" name="second">
                        <div class="img" style="margin:40px;">
                            <img src="../assets/images/暂无数据.png" alt="">
                            <p color="#909399">暂无数据...</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="我的知识库" name="third">
                         <div class="img" style="">
                            <img src="../assets/images/信息.png" alt="" style="width:300px;height:300px">
                            <p color="#909399">暂无数据...</p>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
           </el-card>
        </div>
        <div class="knowledge-right">
            <el-card class="box-card2">
            <div slot="header" class="clearfix" >
                <span ><i class="iconfont icon-wodexuexi" style="color: #E6A23C;font-size: 40px;"></i>我的学习区</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
            </div>
            <div class="box-card2-msg">
                 <div class="img">
                            <img src="../assets/images/暂无数据.png" alt="" style="width:70px;height:50px;">
                            <span color="#909399" style="font-size: 12px;">暂时没有内容...</span>
                  </div>
            </div>
            </el-card>
            <el-card class="box-card2">
            <div slot="header" class="clearfix" >
                <span ><i class="iconfont icon-wodejieyue" style="color:#409EFF;font-size: 40px;"></i>他人借阅</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
            </div>
             <div class="box-card2-msg">
                  <div class="img">
                            <img src="../assets/images/暂无数据.png" alt="" style="width:70px;height:50px;">
                            <span color="#909399" style="font-size: 12px;">暂时没有内容...</span>
                  </div>
            </div>
            </el-card>
            <el-card class="box-card2">
            <div slot="header" class="clearfix" >
                <span ><i class="iconfont icon-zhishi" style="color: #67C23A;font-size: 40px;"></i>我的知识链接</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
            </div>
             <div class="box-card2-msg">
                 <ul style="display:flex">
                     <li style="margin-right: 20px;font-size: 20px;color: #409EFF;"><a href="https://www.baidu.com/?tn=15007414_pg" >百度</a></li>
                     <li style="margin-right: 20px;font-size: 20px ;color: #409EFF;"><a href="https://www.zhihu.com/topic/19550228/hot" >知乎</a></li>
                     <li style="font-size: 20px;color: #409EFF;"><a href="https://tieba.baidu.com/index.html" >百度贴吧</a></li>
                 </ul>
            </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'second'
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="css" >
.knowledge{
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    display: flex;
    /* background: rgb(245, 247, 221); */
}
.knowledge .knowledge-left{
    width: 700px;
    height: 600px;
    /* background: red; */
}
.knowledge-left .box-card {
    width: 100%;
    height: 100%;
}
.box-card .box-card-top{
    width: 100%;
    height:100px;
    padding-top: 22px;
    display: flex;
    background-color: rgb(148, 191, 198);
}
.box-card-top .box-top{
  width: 200px;
}
.box-top .box-top-left{
    height: 90px;
    width: 90px;
    border-radius: 120px;
    background: url(../assets/login.gif) no-repeat;
    background-size: 100% 100%;
    margin:0 20px ;
}
.box-card-top .box-top-right{
   /* background-color: #fff; */
   margin-left: 150px;
}

.knowledge .knowledge-right{
    height: 650px;
    /* background-color: red; */
    margin-left:20px ;
}
.knowledge-right .box-card2{
    width: 400px;
    height: 200px;
    margin-bottom: 20px;
    /* background-color: rgb(217, 243, 240); */
}
.box-card2 .box-card2-msg{
    font-size: 14px;
    margin: 0;
}
</style>