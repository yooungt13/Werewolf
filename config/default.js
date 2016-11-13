const path = require('path');

module.exports = {
    // application name
    name: 'Matrix.js',
    // application server starup file
    app: path.join(__dirname, '/../server/app'),

    host: {
        document: 'localhost:3000'
    },
    path: {
        base: path.join(__dirname, '/../'),
        client: path.join(__dirname, '/../client'),
        server: path.join(__dirname, '/../server'),

        // client config
        dist: path.join(__dirname, '/../client/dist'),
        favicon: path.join(__dirname, '/../client/favicon.ico'),

        // server files
        recipe: path.join(__dirname, '/../server/recipe'),
        context: path.join(__dirname, '/../server/context'),
        middleware: path.join(__dirname, '/../server/middleware'),
        controller: path.join(__dirname, '/../server/controller'),
        datasource: path.join(__dirname, '/../server/model/datasource'),
        mock: path.join(__dirname, '/../server/model/mock'),
        extension: path.join(__dirname, '/../server/extension')
    },
    port: 3000,
    isDebug: false,
    isOnline: false,
    maxCachePoolSize: 8000, // max cache pool size
    maxListener: 100,
    disableTemplateCaching: false
};
