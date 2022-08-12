jQuery(function(){
    var viewModelConstructor = function()
    {
        this.getTitle = function()
        {
            return "Hello Method World";
        }
       this.content = "So many years of hello world";
       this.theValue = "2";
    }

    viewModel = new viewModelConstructor;
    ko.applyBindings(viewModel);
});