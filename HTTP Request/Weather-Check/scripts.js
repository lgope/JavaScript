// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

// Prepare openweathermap.org request
let apiRequest = new XMLHttpRequest();

/**
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
 */
cityForm.addEventListener('submit', $event => {
    $event.preventDefault();
    const chosenCity = cityInput.value;
    apiRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=a204c397485b64ab628f1983674de68f`);
    apiRequest.send();
});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            return reportSection.textContent = 'City not found! 🙁'
        }
        const response = JSON.parse(apiRequest.response);
        reportSection.textContent = `The weather in ${response.name} is ${response.weather[0].main}.`;
    }
}