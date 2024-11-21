const apiKey = '9af44351f80e4b0897c54018242111';  


function fetchWeather(city) {

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            
            const temperature = data.current.temp_c;
            const cityName = data.location.name;
            const weatherIcon = data.current.condition.icon;  

        
            document.getElementById('tem').textContent = `${temperature} °C`;
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('cld').src = `http:${weatherIcon}`;  
        })
        .catch(error => console.error('Error:', error));  
}


document.getElementById('srh').addEventListener('click', function() {
    const city = document.getElementById('search').value.trim();  
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    fetchWeather(city);  
});


document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const city = e.target.value.trim();  
        if (city === "") {
            alert("Please enter a city name");
            return;
        }
        fetchWeather(city);  
    }
});
