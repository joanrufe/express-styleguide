import textInput from './text-input.ejs'

export default {
  name: 'text-input',
  render: textInput,
  defaults: {
    status: "enabled",
    name: "my_input",
    label: "My Input",
    value: "Write here..."
  }
}