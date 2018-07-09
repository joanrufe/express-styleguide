import {renderer} from './modules'

const app = document.getElementById('app')


renderer('atoms/text-input', {
    name: 'submit',
    label: 'Submit',
    status: 'disabled'
}, app)

// const res = renderer('molecules/form')
