# RequireJs

My practise by [this article](https://alanstorm.com/magento_2_and_requirejs/)

## Some notes that are interesting for me:
A module definition is very similar to our main program definition. The main difference is the use of the `define` function instead of the `requirejs` function. The first parameter of `define` is a list of RequireJS modules you’d like to use in **your** module (in our case, this is an empty array — in the real world most modules will use other modules). The second parameter is the javascript function/closure that defines what your module will return.


RequireJS has **no opinion** on what a javascript module should return/export. It could return a plain string. It could return a simple javascript object with a single method defined (as we have above). It could also load in a javascript library like PrototypeJS and return a PrototypeJS object. The only thing RequireJS does is **provide a system for sharing javascript code via modules** — the rest is up to each individual project developer.

### RequireJS File Loading

By default, RequireJS will use the folder where the require.js script is located as its base (/scripts in the above example).

### Configuring RequireJS via Modules
```
//File: app/code/Pulsestorm/RequireJsTutorial/view/base/requirejs-config.js
alert("Hello");
```
Clear your cache, and load any page in your Magento system. You should see your `alert` function call.

#### The Purpose of requirejs-config.js
While you can use `requirejs-config.js` to run any arbitrary javascript, its main job is to

1.  Allow end-user-programmers to add `require.config` options to Magento’s RequireJS system
2.  Allow end-user-programmers to perform any other setup/configuration their javascript needs

If you take a look at any source page in your Magento installation, you should see a tag that looks like this
```
<script  type="text/javascript"  src="http://magento.example.com/static/_requirejs/adminhtml/Magento/backend/en_US/requirejs-config.js"></script>
```

This is a special javascript file that Magento generates during `setup:di:compile` (in `production` mode) or on the fly (`developer` and `default` mode).

Let’s replace our `requirejs-config.js` with the following

```
var config = {
    paths:{
        "my_module":"Package_Module/my_module"
    }
};

alert("Done");    
```

For every individual `requirejs-config.js`, Magento will create a chunk of code in `static/_requirejs/adminhtml/Magento/backend/en_US/requirejs-config.js` that looks like this

```
(function() {
    //CONTENTS HERE
    require.config(config);
})();
```






