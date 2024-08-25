const apiKey = 'f538b162c5f9d147cce0003d12f0e893'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = https:f538b162c5f9d147cce0003d12f0e893//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                document.getElementById('weather-info').innerHTML = '<p>Location not found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    document.getElementById('city').textContent = City: ${data.name};
    document.getElementById('temperature').textContent = Temperature: ${data.main.temp} °C;
    document.getElementById('description').textContent = Weather: ${data.weather[0].description};
}