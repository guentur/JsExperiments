jQuery(function(){
    var viewModelConstructor = function()
    {   
        this.theValue = ko.observable("1");
        var that = this;
        this.pickRandomValue = function(){
            var val = Math.floor(Math.random() * (3));
            that.theValue(val);
        };
    }

    window.viewModel = new viewModelConstructor;
    ko.applyBindings(window.viewModel); 
}); 