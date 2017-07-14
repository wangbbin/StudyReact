var React = require('react');
var ReactDOMServer = require('react-dom/server');

var element = React.createElement('div', null, 'Hello World!');
console.log(ReactDOMServer.renderToString(element));

console.log(process.env.NODE_ENV)
console.log(process.env.DEBUG)
console.log(process.env.DDBUG1)


/*To install React DOM and build your bundle with browserify:

$ npm install --save react react-dom babelify babel-preset-react
$ browserify -t [ babelify ] main.js -o bundle.js
To install React DOM and build your bundle with webpack:

$ npm install --save react react-dom babel-preset-react babel-loader babel-core
$ webpack main.js bundle.js --module-bind 'js=babel-loader'*/