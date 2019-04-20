(() => {
  const pageType = document.getElementsByClassName('page-type')[0].value;
  fetch(`/api?q=${pageType}`)
    .then(response => response.json())
    .then(console.log)
    .catch(console.log);
})();
