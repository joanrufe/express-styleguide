import {router} from './modules'
import templates from './templates'
import './styles/index.scss'

export default function (){
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
    .on(function () {
        renderPage("Frontpage!")
    })
    .resolve();

    router.notFound(function () {
        app.innerHTML = 'NOT FOUND!'
    });

    router.hooks({
        after: function(params){
            router.updatePageLinks()
        }
    })
    router.updatePageLinks()
}