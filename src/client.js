import {renderer} from './modules'

const app = document.getElementById('app')

console.log(PRODUCTION? 'Is prod env': 'Is dev env')

const res = renderer('atoms/text-input')
app.innerHTML = res
