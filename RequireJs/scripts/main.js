//File: scripts/main.js
require.config({   
    paths: {        
        "hello": "helper/world"
    },
});


requirejs(['hello'], function(helper_world) {
    var message = helper_world.getMessage();
    alert(message);
});