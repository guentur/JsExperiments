jQuery(function(){
    var viewModelConstructor = function()
    {
        this.getTitle = function()
        {
            return "Hello Method World";
        }
       this.content = "So many years of hello world";        
    }

    viewModel = new viewModelConstructor;
    ko.applyBindings(viewModel);
});