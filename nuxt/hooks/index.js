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
    console.log('reqStartTime', context.req.reqStartTime);
    console.log('renderStartTime', context.req.renderStartTime);
    console.log('renderEndTime', context.req.renderEndTime);
    console.log('reqEndTime', context.req.reqEndTime);
    console.log('nuxt:render:duration', context.req.renderEndTime-context.req.renderStartTime);
    console.log('nuxt:http:duration', context.req.reqEndTime-context.req.reqStartTime);
    console.log('----------------analysis e---------------------- --');
  },
})
