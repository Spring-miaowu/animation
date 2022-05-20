<template lang="html">
    <section class="calendar" >
        <div class="box" style="display:flex">
          <div class="box-left">
            <el-card class="box-card">
                <div slot="header" >
                <span><i class="iconfont icon-daiban" style="color: rgb(172, 158, 231);font-size: 40px;"></i>代办中心</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
                </div>
                <div class="conn">
                 <ul class=“box-item” style="display:flex">
                   <li class="box-item-li" style="background: rgb(172, 158, 231);">全部代办</li>
                   <li class="box-item-li" style="background: rgb(217, 181, 228);">表单审批</li>
                   <li class="box-item-li" style="background: rgb(197, 234, 199);">待开会议</li>
                 </ul>
                 <ul class=“box-item” style="display:flex" >
                   <li class="box-item-li" style="background: rgb(245, 246, 219);">重要代办</li>
                   <li class="box-item-li" style="background: rgb(246, 207, 181);">领导发的</li>
                   <li class="box-item-li" style="background: rgb(246, 181, 181);">知会工作</li>
                 </ul>
                </div> 
            </el-card>
            <el-card class="box-card">
                <div slot="header" >
                <span><i class="iconfont icon-wodemoban" style="color: rgb(246, 181, 181);font-size: 40px;"></i>我的模板</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
                </div>
                <div class="conn">
                 <ul class=“box-item” style="display:flex" >
                   <li class="box-item-li" style="background: rgb(172, 158, 231);">请假申请单</li>
                   <li class="box-item-li" style="background: rgb(217, 181, 228);">补卡申请单</li>
                   <li class="box-item-li" style="background: rgb(197, 234, 199);">系统审批单</li>
                 </ul>
                 <ul class=“box-item” style="display:flex" >
                   <li class="box-item-li" style="background: rgb(245, 246, 219);">疫情居家办公申请</li>
                   <li class="box-item-li" style="background: rgb(246, 207, 181);">工会合作审批</li>
                   <li class="box-item-li" style="background: rgb(246, 181, 181);">OA系统需求申请单</li>
                 </ul>
                </div> 
            </el-card>
         </div>
         <div class="box-right">
              <el-card class="box-card" >
                <div slot="header" class="clearfix">
                <span><i class="iconfont icon-wode" style="color: rgb(246, 181, 181);font-size: 40px;"></i>我的消息</span>
                <span style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-gengduo" style="color: rgb(172, 158, 231);font-size: 40px;"></i></span>
                </div>
               <div style="height: 300px;">
                  <el-steps direction="vertical" :active="3">
                    <el-step title="时间：7:17 日期：3-1" description="人事助理处理了《请假单》"></el-step>
                    <el-step title="时间：8:54 日期：3-1" description="人事处理了《请假单》"></el-step>
                    <el-step title="时间：9:23 日期：3-1" description="技术组长处理了《请假单》"></el-step>
                    <el-step title="时间：10:48 日期：3-1" description="经理处理了《请假单》"></el-step>
                    <el-step title="时间：11:03 日期：3-1" description="总经理处理了《请假单》"></el-step>
                  </el-steps>
                </div>
              </el-card>
         </div>
      </div>
     
    </section>
</template>

<script>
export default {
  name: "Collaborativework",
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.calendar {
  /* background-color: red; */
  height: 100%;
  /* padding: 10px; */
}

.calendar .box {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.box .box-left {
  /* background-color: rgb(0, 42, 255); */
}
.box-left .box-card {
  width: 700px;
  height: 300px;
  margin: 20px 15px;
}
.box-card .text {
  font-size: 14px;
}
.box-card.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-item {
  display: flex;
}
.box-item-li {
  margin-right: 30px;
  margin-top: 10px;
  width: 170px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  /* background: rgb(246, 181, 181); */
}
/* .box.box-right{
   background: rgb(246, 181, 181);
} */
.box-right .box-card {
  margin: 20px 10px;
  width: 380px;
  height: 650px;
}
.box-right .box-card .more {
  width: 40px;
  height: 20px;
  float: right;
  border: 1px solid rgb(154, 203, 230);
  border-radius: 40%;
}
</style>