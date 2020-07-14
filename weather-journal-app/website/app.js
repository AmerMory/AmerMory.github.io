/* Global Variables */
const button = document.getElementById('generate');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const feelings = document.getElementById('feelings');
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
const city = document.getElementById('city')
let apiKey = '&appid=0aa1e0caeb55372a465c31d06d0c7000';

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let weatherTemp = []



button.addEventListener('click', function() {
    const getData = async (baseURL, city, apiKey) => {
        console.log(baseURL+city+apiKey);
        const res = await fetch(baseURL + city + apiKey);
    
        try {
            const weatherData = await res.json();
            console.log(weatherData);
            return weatherData;
        } catch (err) {
            console.log('Error', err);
        }

        weatherTemp.push(weatherData)
    }

    updateUI()
})

const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
        temp.innerHTML = weatherTemp[0]
        date.innerHTML = 'Date is: ' + newDate
        content.innerHTML = 'Feels: ' + feelings.value
    } catch(err) {
        console.log("Erroe", err);
    }
}


