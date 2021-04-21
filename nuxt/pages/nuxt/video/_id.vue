<template>
  <div class="container">
    <card
      v-for="(item, i) in dealedData.BBM50AKDwangning"
      :key="i"
      :item="item"
    >
    </card>
  </div>
</template>

<script>
import card from '../../../components/card.vue'
export default {
  components: {
    card,
  },
  async asyncData({ app, params }) {
    // const newlist = await app.$axios.get(
    //   'https://3g.163.com/touch/reconstruct/article/list/BBM50AKDwangning/20-10.html'
    // )
    let id = params.id
    const newlist = {
      data: 'artiList({"BBM50AKDwangning":[{"liveInfo":null,"docid":"G31P0T0F05509RJR","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G31P0T0F05509RJR.html","commentCount":36296,"imgsrc3gtype":"3","stitle":"","digest":"某女性（18岁）交了个黑人男友（22岁），也不知道是什么情况","imgsrc":"http://dingyue.ws.126.net/2021/0217/ac2f8679j00qonowo001hd000u000f0p.jpg","ptime":"2021-02-17 12:40:38"},{"liveInfo":null,"docid":"VJ23UMG96","source":"十点一分","title":"网曝18岁女生被闺蜜诱骗到酒店，随后遭黑人性侵","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ23UMG96","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ23UMG96","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210217/gA1CSed6T_cover.jpg","ptime":"2021-02-17 12:29:16","modelmode":"u"},{"liveInfo":null,"docid":"G1HFUAJT05509RJR","source":"十点一分","title":"扫黄现场！河南一KTV涉黄被查，抓捕时20多名女性正在表演","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1HFUAJT05509RJR.html","commentCount":12,"imgsrc3gtype":"3","stitle":"","digest":"1月29日消息，近日河南平顶山市公安局部署，组织100多名警","imgsrc":"http://dingyue.ws.126.net/2021/0129/ceae67b4j00qnoyu90025d000v900fmp.jpg","ptime":"2021-01-29 18:38:24"},{"liveInfo":null,"docid":"VJ0J61SRC","source":"十点一分","title":"胆子太大了！演员嘲讽春晚套路，煽情小品越看越尴尬","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VJ0J61SRC","commentCount":0,"imgsrc3gtype":"1","stitle":"VJ0J61SRC","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210129/NzThcy5v9_cover.jpg","ptime":"2021-01-29 13:55:02","modelmode":"u"},{"liveInfo":null,"docid":"G1GTRO3105509RJR","source":"十点一分","title":"广东孕妇因孕期拒绝同房，被老公掐脖，被婆婆辱骂“小狗”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1GTRO3105509RJR.html","commentCount":118,"imgsrc3gtype":"3","stitle":"","digest":"婚姻原本是人们对未来抱有为好的憧憬才共同走到了一起，可太多人","imgsrc":"http://dingyue.ws.126.net/2021/0129/bc872440j00qnoju3001td000v900fmp.jpg","ptime":"2021-01-29 13:22:26"},{"liveInfo":null,"docid":"G1C0606U05509RJR","source":"十点一分","title":"女子自称被已婚男骗当街放喇叭：人渣！玩弄我的身体","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1C0606U05509RJR.html","commentCount":5,"imgsrc3gtype":"3","stitle":"","digest":"近日，重庆一名女子发现自己竟是“小三”。自己的男友早已结婚并","imgsrc":"http://dingyue.ws.126.net/2021/0127/bc79a697j00qnl0kd001vd000v900fmp.jpg","ptime":"2021-01-27 15:50:19"},{"liveInfo":null,"docid":"G1BIQU6305509RJR","source":"十点一分","title":"浙江24岁女生意外去世，父母逼迫企业赔钱给弟弟买房","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G1BIQU6305509RJR.html","commentCount":3,"imgsrc3gtype":"3","stitle":"","digest":"1月24日，《杭州和事佬》节目播出，一位24岁女生的不幸遭遇","imgsrc":"http://dingyue.ws.126.net/2021/0127/295bb6e2j00qnkpjo0021d000uz00fhp.jpg","ptime":"2021-01-27 11:33:32"},{"liveInfo":null,"docid":"VA01VOFIH","source":"老梁不郁闷","title":"张碧晨未婚有生育指标吗？孩子怎么才能上男方的户口？","priority":0,"url":"","skipURL":"http://3g.163.com/ntes/special/0034073A/touch_videoplay.html?channel=all&offset=19&vid=VA01VOFIH","commentCount":0,"imgsrc3gtype":"1","stitle":"VA01VOFIH","digest":"","skipType":"video","imgsrc":"http://videoimg.ws.126.net/cover/20210122/vTuX5pj1G_cover.jpg","ptime":"2021-01-22 21:37:57","modelmode":"u"},{"imgextra":[{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/7af98e02j00qnc17g00dkc0009c0070c.jpg"},{"imgsrc":"http://cms-bucket.ws.126.net/2021/0122/eb812534j00qnc17g00inc0009c0070c.jpg"}],"liveInfo":null,"docid":"G0V2K3HG0550AC49","source":"天津卫视","title":"马志明“相声春晚”录制聊传承，称“郭德纲算是我们家的传承人”","priority":0,"hasImg":1,"url":"https://3g.163.com/news/article/G0V2K3HG0550AC49.html","commentCount":0,"imgsrc3gtype":"2","stitle":"","digest":"近日，2021年天津卫视德云社相声春晚在津完成录制。除了德云","imgsrc":"http://cms-bucket.ws.126.net/2021/0122/fd544ac6j00qnc17h00o9c0009c0070c.jpg","ptime":"2021-01-22 17:02:59"},{"liveInfo":null,"docid":"S1610969002785","source":"网易","title":"网易创作者大会：10位大咖分享干货，内容扶持计划重磅发布","priority":0,"url":"S1610969002785","skipURL":"http://3g.163.com/ntes/special/00340EPA/wapSpecialModule.html?sid=S1610969002785","specialID":"S1610969002785","commentCount":0,"imgsrc3gtype":"3","stitle":"S1610969002785","digest":"","skipType":"special","imgsrc":"http://cms-bucket.ws.126.net/2021/0120/bac14adfj00qn8bjj00dic000s600e3c.jpg","ptime":"2021-01-21 15:48:35","modelmode":"u"}]})'
    }
    const dealedData = JSON.parse(newlist.data.trim().slice(9, -1))
    return { dealedData }
  },
  middleware: async (ctx) => {
    console.log('pages middleware');
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
