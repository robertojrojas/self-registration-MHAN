'use strict';

var
     Hapi = require('hapi')
   , port = process.env.PORT || 3000
   , options = {
        views: {
            engines: { jade: 'jade' },
            path: __dirname + '/server/views',
            compileOptions: {
                pretty: true
            }
        }
    }
 ;


var server = new Hapi.Server(port, options);

function indexPageHandler(request, reply) {
    reply.view('index', {});
}

server.route([{
      path: '/{all?}'
    , method: 'GET'
    , handler: indexPageHandler
}]);

server.start(function() {
  console.log('Server available at ' + server.info.uri);
});


