const middleware = {}

middleware['default'] = require('../middleware/default.js')
middleware['default'] = middleware['default'].default || middleware['default']

export default middleware
