document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    //const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f3eee6f2ac5bed7f8ac868aab900f225`;

    https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f3eee6f2ac5bed7f8ac868aab900f225
   // const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temp = data.main.temp;
            const humidity = data.main.humidity; 
            const description = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: ${temp} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('description').textContent = `Description: ${description}`;
        })
        .catch(error => {
            alert('City not found, please try again');
        });
}