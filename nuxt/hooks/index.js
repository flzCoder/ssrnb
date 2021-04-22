const { sendToVdruid } = require('../../utils/analysis.js')
export default nuxtConfig => ({
  'vue-renderer:context'(context) {
    context.req.reqStartTime = +new Date()
  },
  'vue-renderer:ssr:prepareContext'(context) {
    context.req.renderStartTime = +new Date()
  },
  'vue-renderer:ssr:context'(context) {
    context.req.renderEndTime = +new Date()
  },
  'render:beforeResponse'(url, result, context){
    context.req.reqEndTime = +new Date()

    console.log('----------------analysis s-------------------------');
    // console.log('reqStartTime', context.req.reqStartTime);
    // console.log('renderStartTime', context.req.renderStartTime);
    // console.log('renderEndTime', context.req.renderEndTime);
    // console.log('reqEndTime', context.req.reqEndTime);
    let render = context.req.renderEndTime-context.req.renderStartTime;
    let total = context.req.reqEndTime-context.req.reqStartTime;
    console.log('nuxt:render:duration', render);
    console.log('nuxt:http:duration', total);
    sendToVdruid(total, render)
    console.log('----------------analysis e---------------------- --');
  },
})
