import app from './app'

// Hot Module Replacement
if (module.hot) {
    module.hot.accept('./app', function(){
        app()
    });
}

app()