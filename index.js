fetch('https://liloandwillo.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      alert(json.length)
  })