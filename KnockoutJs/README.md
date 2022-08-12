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
If you load this page in a browser, it will be completely blank. That’s because we need to
1.  Add the javascript code that creates a **view model** and applies the **KnockoutJS bindings**
2.  Add the **view code** to the HTML page that reads from the **view model**

--
*KnockoutJS bills itself as an “MVVM” system*. This stands for Model, View, View Model. Really though, KnockoutJS is **better billed as a VVM system**, since its agnostic about what sort of model code you use to fetch data.
The view is your HTML page. The view model is the javascript object that contains data.

---
### Why have we added JQuery although (however) it is not required for KnockoutJs
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
While jQuery isn’t required, KnockoutJS can’t start rendering a view until the entire document/DOM is loaded, and jQuery’s default document ready functionality is a good way to achieve this.

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