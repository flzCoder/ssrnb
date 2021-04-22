const http = require('http')
const axios = require('axios')
const sendToVdruid = async (total, render) => {
  const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 500,
    maxFreeSockets: 50,
    keepAliveMsecs: 800
  });

  const vdruidData = {
    "projectid": "",
    "val_nm": "status",
    "tm": Date.now(),
    "val_url": "/demo/ssr/nuxt",
    "source": "node wap3g",
    "val_act": "ok",
    "val_ref": "demo-ssr-nuxt",
    "info": {
      "spstitle": "",
      "modelid": "",
      "timing": {
        "total": total,
        "render": render,
      },
      "ua": "",
      "userIp": "",
      "msg": ""
    }
  }

  const vdruidurl = 'http://vdruid.service.163.org/web/node?param=' + encodeURIComponent(JSON.stringify(vdruidData));
  axios({
    method: 'GET',
    url: vdruidurl,
    headers: {
      'User-Agent': 'wap3g-node'
    },
    timeout: 2000,
    agent
  })
  .then(res => {
    console.log('上报成功');
  })
  .catch(err => {
    console.log('上报失败');
  });
}

module.exports = {
  sendToVdruid: sendToVdruid
}