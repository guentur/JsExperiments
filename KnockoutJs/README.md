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