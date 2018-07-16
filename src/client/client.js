import app from './app'
import templates from '../common/templates'

// Hot Module Replacement
if (module.hot) {
    const dependenciestemplates = templates.getAll().map(function(elem){
        if(!elem.page){
            return [
                `../common/templates/${elem.name}.ejs`,
                `../common/templates/${elem.name}`,
            ]
        }
        return [
            `../common/templates/${elem.page}/${elem.name}.ejs`,
            `../common/templates/${elem.page}/${elem.name}`,
        ]
    }).reduce(function(prev,curr){return prev.concat(curr)}, [])

    module.hot.accept(dependenciestemplates, function(){
        app()
    });
}

app()