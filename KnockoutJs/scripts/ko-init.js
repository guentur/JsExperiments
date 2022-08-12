jQuery(function(){
    var viewModelConstructor = function()
    {   
       this.theValue = ko.observable("1");
    }

    window.viewModel = new viewModelConstructor;
    ko.applyBindings(window.viewModel);        
}); 