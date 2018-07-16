import app from './app'
import styleguideProvider from '../common/styleguideProvider'

// Hot Module Replacement
if (module.hot) {
    const dependenciestemplates = styleguideProvider.getAll().map(function(elem){
        if(!elem.page){
            return [
                `../common/styleguideProvider/templates/${elem.name}.ejs`,
                `../common/styleguideProvider/templates/${elem.name}`,
            ]
        }
        return [
            `../common/styleguideProvider/templates/${elem.page}/${elem.name}.ejs`,
            `../common/styleguideProvider/templates/${elem.page}/${elem.name}`,
        ]
    }).reduce(function(prev,curr){return prev.concat(curr)}, [])

    module.hot.accept(dependenciestemplates, function(){
        app()
    });
}

app()