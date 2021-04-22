const http = require('http')
const request = require('request')
const axios = require('axios')
const sendToVdruid = async (total, render, tech) => {
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
    "val_url": `/demo/ssr/${tech}`,
    "source": "node wap3g",
    "val_act": "ok",
    "val_ref": `demo-ssr-${tech}`,
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
  // axios({
  //   method: 'GET',
  //   url: vdruidurl,
  //   headers: {
  //     'User-Agent': 'wap3g-node'
  //   },
  //   timeout: 2000,
  //   agent
  // })
  // .then(res => {
  //   console.log('上报成功');
  // })
  // .catch(err => {
  //   console.log('上报失败');
  // });

  request({
    method: 'GET',
    url: vdruidurl,
    headers: {
      'User-Agent': 'wap3g-node'
    },
    timeout: 2000,
    agent
  }, (err, res) => {
    if (err) {
      console.log('上报失败', err);
    } else {
      console.log('上报成功');
    }
  });


}

module.exports = {
  sendToVdruid: sendToVdruid
}