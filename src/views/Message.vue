<template>
  <div class="hello">
    <Header></Header>
    <div class="main">
      <div class="top"></div>
      <div class="msg-box">
        <input type="text"><span>确认</span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style  lang="scss"  scoped>
.main {
  background: #270e3b;
  // height: 100vh;
  height: calc(100vh - 84px - 110px );
  position: relative;
  .top{
    height: 90vw;
    width: 90vw;
    margin-left: 5vw;
    margin-bottom: 34px;
    background: chartreuse;
  }
  .msg-box{
    padding: 30px;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100vw;
    background: #502E7F;
    input{
      display: block;
      line-height: 80px;
      height: 80px;
      vertical-align: top;
      flex: 1;
    }
    span{
      display: inline-block;
      height: 80px;
      width: 136px;
      font-size: 36px;
      border-radius: 6px;
      color: #fefefe;
      line-height: 80px;
      text-align: center;
      vertical-align: top;
      background: #51247B;
    }
  }
}
</style>
