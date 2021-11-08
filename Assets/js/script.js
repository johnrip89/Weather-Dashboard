var weather = window.localStorage.getItem("Cities") || [];

var searchBtn = document.querySelector("#search-button");
var recentCitySearches = document.querySelector("#recent-city");
var recentCityBtns = document.querySelector(".recent-city-btns");

var cityInput = document.querySelector("#city-input");

var currentTemp = document.querySelector("#current-temp");
var day1 = document.querySelector("#day1");
var day2 = document.querySelector("#day2");
var day3 = document.querySelector("#day3");
var day4 = document.querySelector("#day4");
var day5 = document.querySelector("#day5");



var displayInfo = function (weatherInfo) {
    currentTemp.textContent = "";
    day1.textContent = "";
    day2.textContent = "";
    day3.textContent = "";
    day4.textContent = "";
    day5.textContent = "";

    var date = moment().format(" L");
    var todayP = document.createElement("p");
    todayP.textContent = weatherInfo.name + date;
    var todayTemp = document.createElement("p");
    todayTemp.textContent = "temp: " + Math.round((weatherInfo.main.temp - 273.15) * 1.80 + 32);
    var todayWind = document.createElement("p");
    todayWind.textContent = "wind: " + weatherInfo.wind.speed + " mph";
    var todayHumidity = document.createElement("p");
    todayHumidity.textContent = "humidity: " + weatherInfo.main.humidity + "%";

    currentTemp.appendChild(todayP);
    currentTemp.appendChild(todayTemp);
    currentTemp.appendChild(todayWind);
    currentTemp.appendChild(todayHumidity);

    var lat = weatherInfo.coord.lat;
    var lon = weatherInfo.coord.lon;

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=59d6703a70d5726f61b38f75473f676e"

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            return response.json().then(function (data) {
                console.log(data);

                var date1 = moment().add(1, 'days').format(' L');
                var day1p = document.createElement("h3");
                day1p.textContent = date1;
                var day1iconID = data.daily[0].weather[0].icon;
                var day1iconUrl = "http://openweathermap.org/img/w/" + day1iconID + ".png";
                var day1icon = document.createElement("img");
                day1icon.src = day1iconUrl;
                var day1temp = document.createElement("p");
                day1temp.textContent = "temp: " + Math.round((data.daily[0].temp.day - 273.15) * 1.80 + 32);
                var day1wind = document.createElement("p");
                day1wind.textContent = "wind: " + data.daily[0].wind_speed + " mph";
                var day1humidity = document.createElement("p");
                day1humidity.textContent = "humidity: " + data.daily[0].humidity + "%";

                var date2 = moment().add(2, 'days').format(' L');
                var day2p = document.createElement("h3");
                day2p.textContent = date2;
                var day2iconID = data.daily[1].weather[0].icon;
                var day2iconUrl = "http://openweathermap.org/img/w/" + day2iconID + ".png";
                var day2icon = document.createElement("img");
                day2icon.src = day2iconUrl;
                var day2temp = document.createElement("p");
                day2temp.textContent = "temp: " + Math.round((data.daily[1].temp.day - 273.15) * 1.80 + 32);
                var day2wind = document.createElement("p");
                day2wind.textContent = "wind: " + data.daily[1].wind_speed + " mph";
                var day2humidity = document.createElement("p");
                day2humidity.textContent = "humidity: " + data.daily[1].humidity + "%";

                var date3 = moment().add(3, 'days').format(' L');
                var day3p = document.createElement("h3");
                day3p.textContent = date3;
                var day3iconID = data.daily[2].weather[0].icon;
                var day3iconUrl = "http://openweathermap.org/img/w/" + day3iconID + ".png";
                var day3icon = document.createElement("img");
                day3icon.src = day3iconUrl;
                var day3temp = document.createElement("p");
                day3temp.textContent = "temp: " + Math.round((data.daily[2].temp.day - 273.15) * 1.80 + 32);
                var day3wind = document.createElement("p");
                day3wind.textContent = "wind: " + data.daily[2].wind_speed + " mph";
                var day3humidity = document.createElement("p");
                day3humidity.textContent = "humidity: " + data.daily[2].humidity + "%";

                var date4 = moment().add(4, 'days').format(' L');
                var day4p = document.createElement("h3");
                day4p.textContent = date4;
                var day4iconID = data.daily[3].weather[0].icon;
                var day4iconUrl = "http://openweathermap.org/img/w/" + day4iconID + ".png";
                var day4icon = document.createElement("img");
                day4icon.src = day4iconUrl;
                var day4temp = document.createElement("p");
                day4temp.textContent = "temp: " + Math.round((data.daily[3].temp.day - 273.15) * 1.80 + 32);
                var day4wind = document.createElement("p");
                day4wind.textContent = "wind: " + data.daily[3].wind_speed + " mph";
                var day4humidity = document.createElement("p");
                day4humidity.textContent = "humidity: " + data.daily[3].humidity + "%";

                var date5 = moment().add(5, 'days').format(' L');
                var day5p = document.createElement("h3");
                day5p.textContent = date5;
                var day5iconID = data.daily[4].weather[0].icon;
                var day5iconUrl = "http://openweathermap.org/img/w/" + day5iconID + ".png";
                var day5icon = document.createElement("img");
                day5icon.src = day5iconUrl;
                var day5temp = document.createElement("p");
                day5temp.textContent = "temp: " + Math.round((data.daily[4].temp.day - 273.15) * 1.80 + 32);
                var day5wind = document.createElement("p");
                day5wind.textContent = "wind: " + data.daily[4].wind_speed + " mph";
                var day5humidity = document.createElement("p");
                day5humidity.textContent = "humidity: " + data.daily[4].humidity + "%";

                day1.appendChild(day1p);
                day1.appendChild(day1icon);
                day1.appendChild(day1temp);
                day1.appendChild(day1wind);
                day1.appendChild(day1humidity);

                day2.appendChild(day2p);
                day2.appendChild(day2icon);
                day2.appendChild(day2temp);
                day2.appendChild(day2wind);
                day2.appendChild(day2humidity);

                day3.appendChild(day3p);
                day3.appendChild(day3icon);
                day3.appendChild(day3temp);
                day3.appendChild(day3wind);
                day3.appendChild(day3humidity);

                day4.appendChild(day4p);
                day4.appendChild(day4icon);
                day4.appendChild(day4temp);
                day4.appendChild(day4wind);
                day4.appendChild(day4humidity);

                day5.appendChild(day5p);
                day5.appendChild(day5icon);
                day5.appendChild(day5temp);
                day5.appendChild(day5wind);
                day5.appendChild(day5humidity);
            });
        } else {
            alert("Error: GitHub User Not Found");
        }
    })
};

var searchCity = function (event) {
    event.preventDefault();

    var city = cityInput.value;

    console.log(city);

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=59d6703a70d5726f61b38f75473f676e";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            return response.json().then(function (data) {
                console.log(data);
                var weather =JSON.parse(window.localStorage.getItem("Cities")) || [];
                if (!weather.includes(city)) {
                    weather.push(city);
                    saveCity(weather);
                }                
                
                displayInfo(data);
                recentSearches();
            });
        } else {
            alert("Error: City Not Found");
        }
    })
};

function saveCity(weather) {
    localStorage.setItem("Cities", JSON.stringify(weather));    
}

function recentSearches() {
    var recentCity = JSON.parse(window.localStorage.getItem("Cities"));

    recentCitySearches.innerHTML = '';

    if (!recentCity) {
        return;
    } else {
        recentCity.forEach(function (value) {
            var button = document.createElement("button")

            console.log(value)

            button.textContent = value;            
            button.setAttribute("type", "submit")

            recentCitySearches.appendChild(button)

        })
    }
}

function recentCitySearch (event) { 
    console.log(event)  
    var city = event.target.outerText; 

    if (!city) {
        return;
    } else {
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=59d6703a70d5726f61b38f75473f676e";
        fetch(apiUrl).then(function (response) {
            if (response.ok) {
                return response.json().then(function (data) {
                    console.log(data);                                         
                    displayInfo(data);
                });
            } else {
                alert("Error: City Not Found");
            }
        })        
    }
}

recentSearches();

recentCitySearches.addEventListener("click", recentCitySearch);
searchBtn.addEventListener("click", searchCity);