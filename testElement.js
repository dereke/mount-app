var mountDiv;

module.exports = function (testId) {
  if (mountDiv) {
    mountDiv.parentNode.removeChild(mountDiv);
  }

  mountDiv = document.createElement('div');
  mountDiv.id = testId || 'test';
  document.body.appendChild(mountDiv);

  return mountDiv;
};

