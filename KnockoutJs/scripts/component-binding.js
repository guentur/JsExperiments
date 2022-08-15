jQuery(function(){    
    var viewModelConstructor = function()
    {   
        this.message = "Hello World";
    }  

    var theTemplate = "<h1 data-bind=\"text:message\"></h1>";    

    ko.components.register('component-hello-world', {
        viewModel:viewModelConstructor,
        template:theTemplate
    });    

    ko.applyBindings();        
});