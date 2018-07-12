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
- Build your styleguide as a jQuery plugin (jQuery not included)

## Usage ##
- To start styleguide development use `npm run develop`
- To do a build for development purposes use `npm run build`
- To do a production build use `npm run build:prod`
- To start the server use `npm run server`. 
- To start render service use `npm run render-service`

```js
$('body').styleguide({
  path: 'atoms/text-input'
  options: { /*.. Options Object ..*/ }
})
```
If any of the options are not defined it will use defaults.

## TODO ##
- Complete server side rendering Service
- Optimise production builds
- Adapt scripts and webpack config for a better dev workflow
- Dinamically fetch styles when using jQuery Plugin
