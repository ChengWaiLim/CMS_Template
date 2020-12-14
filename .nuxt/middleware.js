const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['default'] = require('../middleware/default.js')
middleware['default'] = middleware['default'].default || middleware['default']

middleware['login'] = require('../middleware/login.js')
middleware['login'] = middleware['login'].default || middleware['login']

export default middleware
