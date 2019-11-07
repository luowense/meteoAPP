let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTime = document.querySelector('.Timezone');
let icon = document.querySelector('.icon');

document.getElementById('submitWeather').addEventListener('click', function () {
    let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let city = document.getElementById('city').value;
    let id = '&units=metric&APPID=784e5ae2a5fd923ad0758e331ef9d186';
    let url = api + city + id;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            //set DOM Elements from the API
            temperatureDegree.textContent = data.main.temp + '°C';
            locationTime.textContent = data.name;
            temperatureDescription.textContent = data.weather[0]['main'];
            icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png"/>`;
        })
});

