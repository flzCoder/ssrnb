const express = require('express');
const app = express();
const { loadNuxt, build } = require('nuxt')

const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const serve = (path) => express.static(resolve(path))

app.use('/assets', serve('./handlebar/assets'))
app.use('/dist', serve('./dist'));

const middlewareVuessr = require('./server/middleware/vuessr.js');
const middlewareHandlebar = require('./server/middleware/handlebar.js');
const getDataService = require('./handlebar/server/getdata')
app.get('/getData', getDataService)
app.use(middlewareHandlebar);
app.use(middlewareVuessr);

async function start() {
  const nuxt = await loadNuxt('start')
  app.use(nuxt.render)
  
  app.listen(8181, '0.0.0.0')
  console.log('Server listening on `localhost:' + 8181 + '`.')
}

start()
