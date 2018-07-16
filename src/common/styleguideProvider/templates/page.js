import pageTemplate from './page.ejs'

export default {
  name: 'page',
  render: pageTemplate,
  defaults: {
    pages: ['front-page'],
    children: 'Hello world!'
  }
}