<template>
 <div class="Culturalconstruction">
    <!-- <section class="path_box">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>协同工作</el-breadcrumb-item>
              </el-breadcrumb>
    </section> -->
    <div class="Culturalconstruction-left">
    <el-card class="box-card-left">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="新闻" name="first">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="把光荣镌刻在历史行进的史册里" name="1">
                    <div>一个在风雨飘摇的年代。百年前的5月5日，地处珠江畔的广州东园，简陋的竹棚下，一群有志青年风尘仆仆赶来。中国共产主义青年团在这一天宣告成立。习近平总书记这样说：“这在中国革命史和青年运动史上具有里程碑意义！”</div>
                    <div>从曾经落后挨打的积贫积弱，到如今走向世界舞台的大国自信，中国青年今日平视世界的底气，也源自一代代有志青年的接续奋斗、不懈奋斗。

                     青年之于党和国家而言，最值得爱护、最值得期待。这次庆祝大会，有人解读为“最青春的一个会场”。习近平总书记长达近一个小时的重要讲话，讲给青年，也是讲给未来。青年什么样，国家什么样，未来什么样。大会结束前，总书记动情重温毛泽东同志1937年为陕北公学成立的一段题词。

                     85年前，抗战烽火中，为拯救民族于危难，众多爱国青年壮志逆行，到陕北、到延安。战火中诞生的陕北公学，见证了一代青年“革命理想高于天”的执着追求。

                     “‘要造就一大批人，这些人是革命的先锋队。这些人具有政治远见……’‘中国要有一大群这样的先锋分子，中国革命的任务就能够顺利的解决’。”

                    这样的先锋分子，是青春的模样，是道路的抉择，也是中国阔步向前的中流砥柱。

                    一代代人的青春，一代代人的足迹，一代代人的传承。“今天，党和人民同样需要一大批这样的先锋分子，党中央殷切希望共青团能够培养出一大批这样的先锋分子。这是党的殷切期待，也是祖国和人民的殷切期待！”习近平总书记站起身来，颔首致意，殷殷目光望向青年、望向未来。</div>
                </el-collapse-item>
                <el-collapse-item title="2022年4月时事新闻" name="2">
                   <div><a href="https://news.cctv.com/">查看更多</a></div>
                </el-collapse-item>
                <el-collapse-item title="2022年5月时事新闻" name="3">
                   <div><a href="https://news.cctv.com/">查看更多</a></div>  
                </el-collapse-item>
            </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="公告" name="second">
           <el-collapse v-model="activeNameinfo" accordion>
                <el-collapse-item title="来自数贸科技的感谢信" name="1">
                    <div>OA实施部 test 2022-03-21 14:01 版块：###</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="*****信息技术有限公司关于徐丰磊等职务任免的通知 " name="2">
                    <div>人力资源部 test 2022-03-11 15:07 版块：人事公告</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="来自嘉豪物业（天津）的感谢信" name="3">
                    <div>OA实施部 test 2022-03-04 15:58 版块：###</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="来自创维集团有限公司的感谢信" name="4">
                    <div>OA实施部 test 2022-03-03 15:58 版块：###</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="来自内蒙古伊泰的感谢信" name="4">
                    <div>OA实施部 test 2022-03-01 15:58 版块：###</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="赛默飞对*****TAP项目组成员的感谢信" name="4">
                    <div>OA实施部 test 2022-02-11 15:04 版块：###</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="关于开展*****2021年度工作总结及评优工作的通知 " name="4">
                    <div>人力资源部 王轩 2021-12-15 14:39 版块：人事公告</div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="*****信息技术有限公司2021年终考评方案" name="4">
                    <div>人力资源部 王轩 2021-12-14 17:23 版块：人事公告</div>
                    <div></div>
                </el-collapse-item>
                </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="讨论" name="third">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="jenkins常见问题总结" name="1">
                    <div>
                    1远程部署机器空间不足，需要清理远程被部署机空间
                    2、所拉取的分支不存在，需修改配置或创建相应的分支
                    3、编译机空间不足，找王师傅处理
                    4、下载依赖包不成功
                    编译机本地仓库目录权限有问题，无法下载所需的文件
                    5、Job无法自动停止，sh脚本执行后卡住不动
                    查看sh脚本中是否有nohup命令，尝试在nohup后增加日志输出
                    即 nohup XXXXX >> log.tx</div>
                </el-collapse-item>
                <el-collapse-item title="已备案技术接口文档列表（变化更新2020-08-24）" name="2">
                    <div><a href="">查看更多</a></div>
                </el-collapse-item>
                <el-collapse-item title="Jenkins使用之节点机启动" name="3">
                    <div><a href="">查看更多</a></div>
                </el-collapse-item>
                <el-collapse-item title="通过 .git 目录深入理解 Git！" name="4">
                   <div><a href="">查看更多</a></div>
                </el-collapse-item>
                </el-collapse>
        </el-tab-pane>
       </el-tabs>
      </el-card>
    </div>
    <div class="Culturalconstruction-right">
    <el-card class="box-card-right">
            <div slot="header" class="clearfix" >
                <span><i class="iconfont icon-fenxiang1" style="color: rgb(172, 158, 231);font-size: 40px;"></i>我的分享</span>
                <el-button style="float: right; margin: 3px 0" type="text">更多</el-button>
            </div>
            <div class="box-card-right-msg">
                 <div class="img">
                            <img src="../assets/images/暂无数据.png" alt="" style="width:70px;height:50px;">
                            <span color="#909399" style="font-size: 12px;">暂时没有内容...</span>
                  </div>
            </div>
    </el-card>
    <el-card class="box-card-right-card">
            <div slot="header" class="clearfix" >
                <span><i class="iconfont icon-shoucang" style="color: #F56C6C;font-size: 40px;"></i>我的收藏</span>
                <el-button style="float: right; margin: 3px 0" type="text">更多</el-button>
            </div>
            <div class="box-card-right-msg">
                 <div class="img">
                            <img src="../assets/images/暂无数据.png" alt="" style="width:70px;height:50px;">
                            <span color="#909399" style="font-size: 12px;">暂时没有内容...</span>
                  </div>
            </div>
    </el-card>
    </div>
 </div>
</template>

<script>
export default {
  name: "Culturalconstruction",
  data() {
      return{
         activeName: 'first',
         activeNames: ['1'],
         activeNameinfo:'1'
      }
  },
  mounted: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
    handleChange(val) {
        console.log(val);
      }
  },
};
</script>

<style scoped>
.Culturalconstruction{
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    /* background-color: rgb(203, 229, 242); */
}
.Culturalconstruction .Culturalconstruction-left{
    width: 750px;
    height: 600px;
    /* background: #000; */
}
.Culturalconstruction-left .box-card-left{
    width: 100%;
    height:100%;
}
.Culturalconstruction .Culturalconstruction-right{
 width: 350px;
 margin-left:20px ;
 /* background-color: red; */
}
.Culturalconstruction-right .box-card-right{
    width: 340px;
    height:300px;
    margin-bottom: 20px;
}
.box-card-right .box-card-right-msg{
    font-size:14px;
}
.Culturalconstruction-right .box-card-right-card{
    width: 340px;
    height:200px;
}
</style>
