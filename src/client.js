import {renderer} from './modules'

const app = document.getElementById('app')


const res = renderer('atoms/text-input')
app.innerHTML = res
