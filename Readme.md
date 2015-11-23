# Test Element
Use this library to create a test element that you can use in karma tests or similar

```
var mountApp = require('mount-app');
describe('awesome feature', function(){
  it('is a silver bullet', function(){
    mountApp(function(testEl, data){
      var el = document.createElement('h1');
      el.innerText = data.message;

      testEl.appendChild(el);
    }, {message: 'Hello World'}, {url: '/my-app/home'})
  });
});
```

## mountApp

 * createApp - a function that creates an application and attaches itself to the test element
  - testEl - the element to attach to
  - data - the data object passed to mountApp
 * data - any data to initialise the app with
 * options - mounting options
  - url - the relative url to set the page to before mounting
