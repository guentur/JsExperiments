//File: scripts/main.js
require.config({
    baseUrl: '/my-javascript-module-folder',
});


requirejs(['helper/world'], function(helper_world) {
    var message = helper_world.getMessage();
    alert(message);
});