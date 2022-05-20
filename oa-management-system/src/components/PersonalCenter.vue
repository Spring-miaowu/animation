<template lang="html">
    <div class="perbox">
        <div class="perbox-left">
            <el-card class="box-card-left">
              <div slot="header" class="clearfix">
                <span><i class="iconfont icon-wode" style="color: #909399;font-size: 40px;"></i>个人信息</span>
              </div>
               <section class="touxiangInfo_box">
                  <div class="touxiangInfo"></div>
               </section>
              <!-- <div class="touxiangInfo">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
              </div> -->
              <div class="touxiangInfomsg">
                <p class="touxiangInfomsg-p"><i class="iconfont icon-wode" style="color: #909399;"></i>管理员</p>
                <p class="touxiangInfomsg-p"><i class="el-icon-location-information"></i>江苏OA管理中心</p>
                <p class="touxiangInfomsg-p"><i class="el-icon-location-information"></i>中国 江苏省 无锡市</p>
              </div>
               <!-- <span>没有谁的幸运，凭空而来，只有当你足够努力，你才会足够幸运。这世界不会辜负每一份努力和坚持，时光不会怠慢执着而勇敢的每一个人！</span> -->
              <div class="tag">
                   <!-- <p class="tag-p" >标签</p> -->
                   <el-tag
                   class="tag-item"
                    v-for="tag in tags"
                    :key="tag.name"
                    closable
                    :type="tag.type">
                    {{tag.name}}
                    </el-tag>
              </div>
            </el-card>
        </div>
        <div class="perbox-right">
            <el-card class="box-card-right">
              <div slot="header" class="clearfix">
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="基本信息" name="first"></el-tab-pane>
                        <el-tab-pane label="账号绑定" name="second"></el-tab-pane>
                </el-tabs>
              </div>
              <div class="information" v-if="activeName=='first'">
                <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="真实姓名" prop="name">
                        <el-input v-model="ruleForm.name" width="120px"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-input v-model="ruleForm.sex"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="mailbox">
                        <el-input v-model="ruleForm.mailbox"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="telephone">
                        <el-input v-model="ruleForm.telephone"></el-input>
                    </el-form-item>
                     <el-form-item label="个人简介" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
              </div>
              <div class="accountnumber" v-else>
                  <div class="button">
                       <el-button type="primary" round>修改</el-button>
                  </div>
                  <ul class="accountnumber-item">
                      <li class="accountnumber-item-li">
                          <span class="accountnumber-item-li-span">密保手机：</span>
                          <span class="accountnumber-item-li-span2">已绑定手机：180****1234</span>
                      </li>
                      <li class="accountnumber-item-li">
                          <span class="accountnumber-item-li-span">密保邮箱：</span>
                          <span class="accountnumber-item-li-span2">已绑定手机：180****1234@gmail.com</span>
                      </li>
                      <li class="accountnumber-item-li">
                          <span class="accountnumber-item-li-span">密保问题：</span>
                          <span class="accountnumber-item-li-span2">未设置密保问题</span>
                      </li>
                  </ul>
              </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      activeName: "first",
        tags: [
          { name: '最美可是初见', type: '' },
          { name: '回忆当作尘埃', type: 'success' },
          { name: '浮生如梦', type: 'info' },
          { name: '梦想的初衷', type: 'warning' },
          { name: '傲娇的活着', type: 'danger' }
        ],
      ruleForm: {
        name: "",
        username: "",
        sex: "",
        mailbox: "",
        telephone: "",
        desc: "",
      },
      rules: {
        name: [{ required: true, message: "请输入真实名字", trigger: "blur" }],
        username: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClick(val) {
      console.log(val);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="css">
.perbox {
  width: 100%;
  height: 100%;
  /* background: rgb(109, 103, 103); */
  display: flex;
}
.perbox .perbox-left {
  padding: 20px 20px;
  /* background-color: red; */
}
.text {
  font-size: 14px;
}

.item {
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
.perbox-left .box-card-left{
  width: 380px;
  height: 600px;
}
.box-card-left .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /* .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  } */
/* .box-card-left .avatar-uploader-icon {
    font-size: 28px;
    color: #a9c7f1;
    width: 100px;
    height: 100px;
    border-radius:50% ;
    line-height: 100px;
    text-align: center;
} */
/* .box-card-left .avatar {
    width: 100px;
    height: 100px;
    display: block;
} */
/* .box-card-left .touxiangInfomsg{
  background-color: red;
} */
/* .box-card-left .tag{
  border: 1px solid black;
} */
.touxiangInfo_box {
  width:  100px;
  height: 100px;
}
.touxiangInfo_box .touxiangInfo{
    height: 90px;
    width: 90px;
    border-radius: 120px;
    background: url(../assets/login.gif) no-repeat;
    background-size: 100% 100%;
    /* position: absolute; */
    /* left: calc(50% - 45px); */
    /* top: 25px; */
  }
.touxiangInfomsg .touxiangInfomsg-p{
  margin-left: 10px;
}
.touxiangInfomsg span{
  font-size: 10px;
}
.box-card-left .tag-item{
  margin-right:15px;
}
.perbox-right {
  padding: 20px 20px;
}
.perbox-right .box-card-right {
  /* margin-top:20px ; */
  width: 700px;
}
 .box-card-right .accountnumber-item {
  /* background-color: yellow; */
}
.accountnumber-item .accountnumber-item-li {
  display: flex;
}
.accountnumber-item-li .accountnumber-item-li-span {
  font-size: 20px;
  margin-right: 20px;
}
.accountnumber-item-li .accountnumber-item-li-span2 {
  font-size: 14px;
  margin-right: 10px;
}

</style>