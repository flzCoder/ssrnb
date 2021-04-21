const express = require('express');
const app = express();
const router = express.Router();
const { loadNuxt, build } = require('nuxt');
router.use(async (req, res, next) => {
  if (req.originalUrl.indexOf('nuxt') > -1) {
    const nuxt = await loadNuxt('start')
    app.use(nuxt.render)
  } else {
    next();
  }
});

module.exports = router;
