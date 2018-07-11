import textInputRender from './text-input.ejs'
import textInputDefaults from './text-input.json'

const atoms = [
  {
    name: 'text-input',
    render: textInputRender,
    defaults: textInputDefaults
  }
].map(elem => ({page: 'atoms', ...elem}))

export default atoms