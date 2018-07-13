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

## Add new components into styleguide ##
If you want to add a component into an existing page (eg: component inside atoms page) follow next steps:
1. Create *component.ejs* file that should contain a valid EJS template
2. Create *component.json* file that should be an object that represents the default values of the template
3. Edit *src/common/templates/atoms/index.js*
4. Import and export your component:
```js
//...
// Add imports for component
import componentRender from './text-input.ejs'
import componentDefaults from './text-input.json'

const atoms = [
  //...
  // Add new component at the end of atoms array
  {
    name: 'component',
    render: componentRender,
    defaults: componentDefaults
  }
].map( elem => ({page: 'atoms', ...elem}) )
```
If you are creating a new page you should do the same as above but for in *src/common/templates/index.js* (eg: newPage):
```js
import atoms from './atoms';
// Import folder page
import newPage from './newPage';

// ------- Add here new pages from imported components -------- //
const all = [
    ...atoms,
    ...molecules,
    ...newPage, // Spread all component from new page
    page // Don't touch this one
]

const pages = {
    atoms,
    molecules,
    newpage
}
// ------------------------------------------------------- //
```

## TODO ##
- Complete server side rendering Service
- Optimise production builds
- Adapt scripts and webpack config for a better dev workflow
- Dinamically fetch styles when using jQuery Plugin
