(() => {
  fetch('/api')
    .then(response => response.json())
    .then(console.log)
    .catch(console.log);
})();
