# Vanilla javascript live styleguide #
Boilerplate to use as a starter styleguide.

## Instalation ##
To install dependencies just go into the project folder and type `npm install`

## Features ##
- Node/ExpresJS server for styleguide navigation
- EJS template system
- Webpack to bundle the app
- PostCSS with CSSNext
- Babel that transpile ES6 to support older browsers 

## Usage ##
- To start styleguide development use `npm run client`
- To do a styleguide development build use `npm run build`
- To do a styleguide production build  use `npm run build:prod`
- To build the jquery plugin use `npm run build:plugin`
- To start the server use `npm run server`. 
- To do server development use `npm run server-dev`. This will reload server after any change in related files

jQuery its not included so you should load it before this plugin. Then you use it like this:

```js
$('body').styleguide({
  path: 'atoms/text-input'
  options: { /*.. Options Object ..*/ }
})
```
If any of the options are not defined it will use defaults.

## TODO ##
- Server side rendering Service
- Optimise production builds
- Change develoment settings for a better dev workflow
- Dinamically fetch styles when using jQuery Plugin
