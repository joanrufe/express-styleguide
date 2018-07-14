import {router} from './modules'
import templates from '../common/templates'
import '../common/styles/index.scss'

const app = document.getElementById('app')
/**
 * Render with page template
 * @param {string} children HTML string to render
 * @param {Element} elem HTML element from query
 */
function renderPage(children){ 
    app.innerHTML = templates.getByPath('page').render({
        pages: templates.getPageNames(),
        children: children
    })
}

// Page with all the components
router
.on('/:page/', function (params) {
    const foundTemplates = templates.getByPath(params.page)
    if(foundTemplates){
        const rendered = foundTemplates.map(tpl => tpl.render(tpl.defaults)).join('<br><br>')
        renderPage(rendered)
    }else{
        renderPage('Not Found!')
    }
})
.resolve();

// Component page (Check if it's working)
router
.on('/:page/:component',function(params){
    const componentTemplate = templates.getByPath(`${params.page}/${params.component}`)

    const renderedComponent = componentTemplate()

    renderPage(renderedComponent)
})

// Home Route
router
.on('/',function () {
    renderPage("Frontpage!")
})
.resolve();

router.notFound(function () {
    renderPage("Frontpage!")
});

router.hooks({
    after: function(params){
        router.updatePageLinks()
    }
})

export default function (){
    // take route from hash on page reload
    if(location.hash) router.navigate(location.hash.replace('#','/'))
    router.updatePageLinks()
}