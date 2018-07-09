import {renderer} from './modules'
import './styles/index.scss'

const app = document.getElementById('app')


const res = renderer('atoms/text-input')
app.innerHTML = res
