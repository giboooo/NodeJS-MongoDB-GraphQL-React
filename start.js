
require('./src/server/server.js')


/**
 * TODO : (babel)
 * compiling commonjs to module es6
 * https://hackernoon.com/7-different-ways-to-use-es-modules-today-fc552254ebf4
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ERRORS:
 * 
 * on chrome:
 * materialize.min.js:6 [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
 * 
 * 
 * on firefox: 
 * Source map error: TypeError: NetworkError when attempting to fetch resource.
Resource URL: moz-extension://44057ac1-5bd8-4cab-af62-d08c0c577047/node_modules/webextension-polyfill/dist/browser-polyfill.js
Source Map URL: browser-polyfill.js.map[Learn More]
 * https://developer.mozilla.org/en-US/docs/Tools/Debugger/Source_map_errors
 */
