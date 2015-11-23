var testElement = require('./testElement');

module.exports = function(createApp, data, options) {
  resetLocation(options);
  createApp(testElement(), data);
};

function resetLocation(options) {
  if (options && options.url) {
    history.pushState(undefined, undefined, options.url);
  }
}
