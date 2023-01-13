$(".weather-table thead").append(`
  <tr>
    <th scope="col">Location</th>
    <th scope="col">Description</th>
    <th scope="col">Tempature</th>
    <th scope="col">Feels like temp</th>
    <th scope="col">Cloud</th>
    <th scope="col">Humidity</th>
    <th scope="col">Air pressure</th>
    <th scope="col">Wind speed</th>
  </tr>
`);

function renderWeather(data) {
  $(".weather-table tbody").append(`
    <tr>
      <td scope="row">${data.location}</td>
      <td scope="row">${data.description}</td>
      <td scope="row">${data.temp}</td>
      <td scope="row">${data.feelTemp}</td>
      <td scope="row">${data.cloud}</td>
      <td scope="row">${data.humidity}</td>
      <td scope="row">${data.pressure}</td>
      <td scope="row">${data.wind}</td>
    </tr>
  `)
}

$(".location-field").on("keydown", event => {
  if (event.key == "Enter") {
    searchWeather(event.target.value)
      .then(renderWeather)
      .catch(err => document.body.innerHTML = "Du fick fel!");
  }
})