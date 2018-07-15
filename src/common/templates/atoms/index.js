import textInput from './text-input.js'

const atoms = [
  textInput
].map(elem => ({page: 'atoms', ...elem}))

export default atoms