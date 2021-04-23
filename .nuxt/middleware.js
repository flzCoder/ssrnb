const middleware = {}

middleware['render'] = require('../nuxt/middleware/render.js')
middleware['render'] = middleware['render'].default || middleware['render']

export default middleware
