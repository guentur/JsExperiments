# RequireJs

My practise by [this article](https://alanstorm.com/magento_2_and_requirejs/)

## Some notes that are interesting for me:
A module definition is very similar to our main program definition. The main difference is the use of the `define` function instead of the `requirejs` function. The first parameter of `define` is a list of RequireJS modules you’d like to use in **your** module (in our case, this is an empty array — in the real world most modules will use other modules). The second parameter is the javascript function/closure that defines what your module will return.


RequireJS has **no opinion** on what a javascript module should return/export. It could return a plain string. It could return a simple javascript object with a single method defined (as we have above). It could also load in a javascript library like PrototypeJS and return a PrototypeJS object. The only thing RequireJS does is **provide a system for sharing javascript code via modules** — the rest is up to each individual project developer.

### RequireJS File Loading

By default, RequireJS will use the folder where the require.js script is located as its base (/scripts in the above example).




