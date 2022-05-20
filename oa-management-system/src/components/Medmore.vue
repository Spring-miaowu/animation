<template lang="html">
  <div class="medbox">
      <div class="img">
         <img src="../assets/images/笔记本.png" alt="" style="width:100px;height:100px;">
         <span color="#909399" style="font-size: 12px;">填写日志</span>
      </div>
    <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde';
    export default {
        name:"Medmore",
        data: function(){
            return {
                content:'请填写今天的主要内容',
                configs: {
                    status: true,
                    initialValue: '',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                }
            }
        },
        components: {
            markdownEditor
        }
    }
</script>

<style lang="css">
  .medbox{
    width: calc(100% - 20px);
    position: absolute;
    top: 20px;
    left: 10px;
  }
</style>