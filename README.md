# Isomorphic javascript components #
Simple template system built on the top of EJS. You can use it as boilerplate to build living styleguide.

## Features ##
The following features are enabled by default:
- Node [ExpressJS](http://expressjs.com/es/) server for styleguide navigation
- [EJS](http://ejs.co/) template system
- [Webpack](https://webpack.js.org/) to bundle the app
- PostCSS that provides CSS autoprefix and [CSSNext](http://cssnext.io/features/) support
- [Babel](https://babeljs.io/) to transpile ES6 for older browsers  support 
- Build your styleguide as a jQuery plugin (jQuery not included)


## Instalation ##
Open a terminal, move into the project folder and execute `npm install`

## Usage ##
The following scripts will help you manage the deployment process and launch the services provided:
- To start styleguide development use `npm run develop`
- To do a build for development purposes use `npm run build`
- To do a production build use `npm run build:prod`
- To start the styleguide server use `npm run server`
- To start render service use `npm run render-service`

## jQuery plugin usage ##
To append a rendered component to a jQuery selector use:
```js
$('body').styleguide({
  path: 'atoms/text-input'
  options: { /*.. Options Object ..*/ }
})
```
If any of the options are not defined the defaults will be used.

## Render service API ##
Running `npm run render-service` will wake up an express server in [http://localhost:5000/](http://localhost:5000/). 

Use the endpoint */render/* to fetch any component. Eg: [http://localhost:5000/render/atoms/text-input/](http://localhost:5000/render/atoms/text-input/)

## Add new components into styleguide ##
If you want to add a component (eg: newComponent inside myPage) follow next steps:
1. Create `src/client/common/styleguideProvider/myPage/newComponent.ejs` file that must contain a valid EJS template. 
2. In the same folder, create `src/client/common/styleguideProvider/myPage/newComponent.js` file and export an object that have at least these properties **name**, **render** and **defaults**. Check example: 
```js
import newComponentRender from './newComponent.ejs'

export default {
  name: 'component',
  render: newComponentRender,
  defaults: {
    // Optional - default variables for ejs template
  }
}
```
3. Edit `src/common/styleguideProvider/templates/myPage/index.js`, import the component and add it to the array of components contained in *myPage*:
```js
import newComponent from './newComponent.js'

const myPage = [
  // ...other components
  newComponent
].map( elem => ({page: 'myPage', ...elem}) )

export myPage
```
4. If you are creating a new page you have to register it by editing `src/common/common/styleguideProvider/templates/index.js`:
```js
import newPage from './newPage'; // Don't forget to import

// Register here new pages
const all = [
  page,
  ...atoms,
  ...molecules,
  ...newPage, // Spread the newPage components
]
```
Remember to create a index.js file into the newpage with same structure described under point 3.


### Component delivery ###
![Delivery Workflow](./delivery-workflow.png)