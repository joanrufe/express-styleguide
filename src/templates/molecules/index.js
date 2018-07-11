import formRender from './form.ejs'
import formDefaults from './form.json'

const molecules = [
  {
    name: 'form',
    render: formRender,
    defaults: formDefaults
  }
].map(elem => ({page: 'molecules', ...elem}))

export default molecules