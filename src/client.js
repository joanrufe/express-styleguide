import app from './app'
//@TODO: Modify hot-realoading so that we don't loose current state

// App Element container
if (module.hot) {
    module.hot.accept('./app', app);
}

app()