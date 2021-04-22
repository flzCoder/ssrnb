const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const LRU = require('lru-cache');
const { createBundleRenderer } = require('vue-server-renderer');
const { sendToVdruid } = require('../../utils/analysis.js')
const resolveFile = file => path.resolve(__dirname, file);
const bundle = require(`../../dist/vue-ssr-server-bundle.json`);
const clientManifest = require(`../../dist/vue-ssr-client-manifest.json`);
function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolveFile(`./dist`),
    runInNewContext: false
  }));
}
let templatePath = resolveFile('../../src/index.template.html');
let template = fs.readFileSync(templatePath, 'utf-8')
let render = createRenderer(bundle, {
  template: template,
  clientManifest
});

router.use((req, res, next) => {
  let reqStart = Date.now()
  if (req.originalUrl.indexOf('vuessr') > -1) {
    const context = {
      title: '网易手机网',
      url: req.url,
      metas: `
      <meta name="keyword" content="vue,ssr">
      <meta name="description" content="vue srr demo">
  `
    };
    let renderStart = Date.now()
    render.renderToString(context, (err, html) => {
      if (err || !html) {
        res.status(500).type("html").end(`${err}`);
        return;
      }
      let renderEnd = Date.now()
      res.send(`${html}`);
      let reqEnd = Date.now()
      let render = renderEnd-renderStart
      let total = reqEnd-reqStart
      console.log('----------------analysis s-------------------------');
      console.log('vuessr:render:duration:', render);
      console.log('vuessr:http:duration:', total);
      sendToVdruid(total, render, 'vuessr')
      console.log('----------------analysis e---------------------- --');
    });
  } else {
    next();
  }
});

module.exports = router;
