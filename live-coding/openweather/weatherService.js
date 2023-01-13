const apiKey = "638df43929148df653121b2bc82d9691";

const cityLookupURL = cityName => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
}

const weatherLookupURL = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

function fetchJson(url) {
  return fetch(url).then(resp => resp.json());
}

function findWeather(coords) {
  let url = weatherLookupURL(coords.lat, coords.lon);
  return fetchJson(url);
}

function findCityGeo(cityName) {
  let url = cityLookupURL(cityName);
  return fetchJson(url);
}

function transformWeatherData(data) {
  return {
    location: data.location,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feelTemp: data.main.feels_like,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    cloud: data.clouds.all,
    wind: data.wind.speed
  }
}

function extractCoords(data) {
  return {
    // name: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon
  }
}

async function searchWeather(location) {
  let coords = await findCityGeo(location).then(extractCoords);
  let weatherData = await findWeather(coords).then(transformWeatherData);

  weatherData.location = location;
  return weatherData;

  // return findCityGeo(location)
  //   .then(extractCoords)
  //   .then(findWeather)
  //   .then(transformWeatherData)
  //   .then(weatherData => {
  //     weatherData.location = location;
  //     return weatherData;
  //   })
  // .then(jsonData => extractCoords(jsonData))
  // .then(coords => findWeather(coords))
  // .then(jsonData => transformWeatherData(jsonData));
}