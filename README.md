# hittheoffers
First web app - graduation project 


TODO
  docker
  cloud
  
  change the database name (test or graphql)
  auth process
  admin
  login (google + facebook)
  404
  singleton


ERRORS:
  on chrome:
  materialize.min.js:6 [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952

  on firefox: 
  Source map error: TypeError: NetworkError when attempting to fetch resource.
  Resource URL: moz-extension://44057ac1-5bd8-4cab-af62-d08c0c577047/node_modules/webextension-polyfill/dist/browser-polyfill.js
  Source Map URL: browser-polyfill.js.map[Learn More]
  https://developer.mozilla.org/en-US/docs/Tools/Debugger/Source_map_errors



TECHNO:
  frontend:
    html
    css (Materialize)

  backend:
    nodejs (koa) 
    npm (
      esm - compiling es6
    )
    
  database:
    mongodb
    mongoose
    graphql