const {resolve} = require('path')
const r = path => resolve(__dirname, path) // TODO : variable r is not used??

// require('babel-core/register')({
//   'presents': [
//     'stage-3',
//     ['latest-node', {'target': 'current'}]
//   ], 
//   'plugins': ['transform-decorators-legacy']
// })

// require('babel-polyfill')
require('./src/server/index.js')
