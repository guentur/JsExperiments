# Alan Storm tutorial. KnockoutJs for Magento
My training practise by [this article](https://alanstorm.com/knockoutjs_primer_for_magento_developers/)
titled "KnockoutJS Primer for Magento Developers
"

## Some interesting parts from the article mentioned above:

```
<!-- File: page.html -->  
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
    <script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>    
</head>
<body>
<div id="main">
    <h1></h1>
    <p></p>
</div>
</body>
</html>
```

This page
1.  Loads the KnockoutJS library from the cloudflare CDN
2.  Loads the jQuery library from the jQuery code CDN
3.  Sets up an empty DOM node structure

---
### Why have we added JQuery although (however) it is not required for KnockoutJs
While jQuery isn’t required, KnockoutJS can’t start rendering a view until the entire document/DOM is loaded, and jQuery’s default document ready functionality is a good way to achieve this.

---
If you load this page in a browser, it will be completely blank. That’s because we need to
1.  Add the javascript code that creates a **view model** and applies the **KnockoutJS bindings**
2.  Add the **view code** to the HTML page that reads from the **view model**

---
*KnockoutJS bills itself as an “MVVM” system*. This stands for Model, View, View Model. Really though, KnockoutJS is **better billed as a VVM system**, since its agnostic about what sort of model code you use to fetch data.
The view is your HTML page. The view model is the javascript object that contains data.

Take a look at the javascript code
```
//File: ko-init.js
jQuery(function(){
    viewModel = {
        title:"Hello World",
        content:"So many years of hello world"
    }; 
    ko.applyBindings(viewModel);
});
```
Here we’ve created a view model with simple key/value pairs.

```
//File: ko-init.js
viewModel = {
    title:"Hello World",
    content:"So many years of hello world"
}; 
```

Then, we’ve _applied_ the KnockoutJS bindings. Another way to say this is we’ve told KnockoutJS to render the view with our view model. Again, the view is the entire HTML page.

If we look at the important section of our view, we see the `data-bind` attributes

```
<!-- File: page.html -->  
<div id="main">
    <h1 data-bind="text:title"></h1>
    <p data-bind="text:content"></p>
</div>
```

When you call `applyBindings`, KnockoutJS will scan the entire HTML page for `data-bind` attributes. When it finds these attributes, it parses the attribute for the binding name and value, and then invokes a set of rules based on the name of the binding.

---
### Observable
```js
//File: ko-init.js
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
```
An observable is a special sort of getter and setter.


If you open up your *javascript console*, and type the following, you’ll see we can fetch the value of the observable by calling it as a function (`viewModel` is available via the console since we defined it as a global object on the `window` object)

```
> viewModel.theValue()    
> "1"
```

### Template Binding
The template binding accepts a javascript object as a parameter

```
<!-- File: template-binding.html --> 
<div id="one" data-bind="template:{'name':'hello-world','data':first}"></div>
```

The data parameter is the property of the view model we want to render the template with. The name of the template is just that — the template name to lookup and render.

The most basic way of adding a named template to the system is adding a `<script/>` tag with a `type` of `text/html`.

```
<!-- File: template-binding.html --> 
<script type="text/html" id="hello-world">
    <h1 data-bind="text:theTitle"></h1>
    <p data-bind="text:theContent"></p>
</script>   
```

If you’ve never seen this before it may seem weird/foreign, but many modern javascript frameworks use non-`text/javascript` `<script/>` tags as a way to add non-rendered (but DOM accessible) content to a page. A template is just a standard set of HTML nodes with KnockoutJS bindings.

### Component Binding
Components are a way to package together a KnockoutJS template, and a KnockoutJS view file.

```
<!-- File: page.html -->      
<div data-bind="component:'component-hello-world'"></div>
```

which hides the complexity of a registered component.

```
//File: ko-init.js
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
```

The `register` function of the component object expects a name for your component, and then a KnockoutJS component object. A component object is a javascript script object with two properties. The `viewModel` property expects a view model **constructor function**, and the `template` property should be a string with a KnockoutJS template.

The official docs have a [pretty good overview](http://knockoutjs.com/documentation/component-overview.html) of the component binding.

### Custom Binding

```
<!-- File: page.html -->  
<div data-bind="pulseStormHelloWorld:message"></div>
```

Without an implementation, KnockoutJS will ignore our binding. Instead, implement JS with your logic

```
//File: ko-init.js
jQuery(function(){    
    var viewModelConstructor = function()
    {   
        this.message = "Hello World";
    }  

    ko.bindingHandlers.pulseStormHelloWorld = {
        update: function(element, valueAccessor){
            jQuery(element).html('<h1>' + valueAccessor() + '</h1>');
        }
    };    
    ko.applyBindings(new viewModelConstructor);        
});
```

To add the custom binding to KnockoutJS, all we need to do is add a property to the `ko` object’s `binidngHandlers` object. The name of this property is the name of our binding. The _handler_ is a JS object with an `update` method. KnockoutJS calls the `update` method whenever a binding is invoked — either during `applyBindings`, or via an observable.

[KnockoutJS core documentation on custom bindings](http://learn.knockoutjs.com/#/?tutorial=custombindings)
