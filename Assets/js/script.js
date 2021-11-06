var searchBtn = document.querySelector("#search-button");
var austinBtn = document.querySelector("#austin-button");
var chicagoBtn = document.querySelector("#chicago-button");
var nyBtn = document.querySelector("#ny-button");
var orlandoBtn = document.querySelector("#orlando-button");
var sfBtn = document.querySelector("#sf-button");
var seattleBtn = document.querySelector("#seattle-button");
var denverBtn = document.querySelector("#denver-button");
var atlantaBtn = document.querySelector("#atlanta-button");

var cityInput = document.querySelector("#city-input");

var day1 = document.querySelector("#day1");
var day2 = document.querySelector("#day2");
var day3 = document.querySelector("#day3");
var day4 = document.querySelector("#day4");
var day5 = document.querySelector("#day5");

var displayInfo = function (weatherInfo) {
    var day1p = document.createElement("p");
    day1p.textContent = weatherInfo;
    var day1icon = document.createElement("p");
    day1icon.textContent = weatherInfo;
    var day1temp = document.createElement("p");
    day1temp.textContent = "temp:" + weatherInfo;
    var day1wind = document.createElement("p");
    day1wind.textContent = "wind:" + weatherInfo;
    var day1humidity = document.createElement("p");
    day1humidity.textContent = "humidity:" + weatherInfo;

    day1.appendChild(day1p);
    day1.appendChild(day1icon);
    day1.appendChild(day1temp);
    day1.appendChild(day1wind);
    day1.appendChild(day1humidity);
};



var searchCity = function () {
    var city = cityInput.value; 

    console.log(city);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=59d6703a70d5726f61b38f75473f676e")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayInfo(data);
        })
}

searchBtn.addEventListener("click", searchCity);