var express = require('express');
var app = express();

const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const serve = (path) => express.static(resolve(path))

app.use('/assets', serve('./handlebar/assets'))
app.get('/getData', getDataService)
app.use('/dist', serve('./dist'));

const middlewareVuessr = require('./server/middleware/vuessr.js');
const middlewareHandlebar = require('./server/middleware/handlebar.js');
const middlewareNuxt = require('./server/middleware/nuxt.js');
const getDataService = require('./handlebar/server/getdata')

app.use(middlewareHandlebar);
app.use(middlewareVuessr);
app.use(middlewareNuxt);

// const { loadNuxt, build } = require('nuxt')
// async function start() {
//   const nuxt = await loadNuxt('start')
//   app.use(nuxt.render)


// }

// start()
app.listen(3002, '0.0.0.0')
console.log('Server listening on `localhost:' + 3002 + '`.')