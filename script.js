//to display no location warning sign
function revealNoLocationWarning () {
        document.getElementById("weatherNotFound").style.display = 'block';
        document.getElementById("weatherFound").style.display = 'none';
}

//to display the weather data
function revealLocation () {
    document.getElementById("weatherNotFound").style.display = 'none';
    document.getElementById("weatherFound").style.display = 'block';
}

function startPage() {
    document.getElementById("weatherNotFound").style.display = 'none';
    document.getElementById("weatherFound").style.display = 'none';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//to click the button on pressing enter key
window.onload = function() {
    var input = document.getElementById("location");

    input.addEventListener("keypress", function(event) {
        if( event.key === "Enter" ) {
            event.preventDefault();
            document.getElementById("location-button").click();
        }
    });

    firstMode();
}

//checks if location exists and calls revealLocation or revealNoLocationWarning
function checkLocation () {
    var x = document.getElementById("location").value;
    x.toString();
    if (x) {
        weather.fetchWeather(x)
    } else if (x === "") {
        startPage();
    }
}

let weather = {
    apiKey: "e86b10876f017da658a0a925e5312540",

    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather:  function(data) {
        const { error } = data.cod;

        if( data.cod !== 200 ) {
            revealNoLocationWarning();
        } else {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity} = data.main;
            const { speed } = data.wind;
            console.log(name, description, temp, humidity, speed);

            document.querySelector(".temperature").innerText = Math.ceil(temp) + "°C";
            document.querySelector(".description").innerText = capitalizeFirstLetter(description);
            document.querySelector(".humidity-value").innerText = humidity + "%";
            document.querySelector(".wind-value").innerText = speed;
            + icon
            + "@2x.png";
            revealLocation();
        }
    }
}

//setting light mode by default
var currentMode = 0;

function firstMode () {
    setMode( currentMode );
}

//for changing mode
function changeMode () {
    if( currentMode === 0 ) {
        setMode(1);
        currentMode = 1;
    } else if ( currentMode === 1) {
        setMode(0);
        currentMode = 0;
    }
}

function setMode( value ) {
    if (value === 0) {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f5f5f5");
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#f5f5f5";
        
        document.getElementById("navbarID").style.background = "#f5f5f5";
        document.getElementById("mode-button").style.background = "#f5f5f5";
        document.getElementById("mode-button").style.color = "#F2AA4C";
        document.getElementById("github-button").style.background = "#f5f5f5";
        document.getElementById("github-button").style.color = "#F2AA4C";

        document.getElementById("containerID").style.background = "#F2AA4C";

        document.getElementById("searchBoxID").style.background = "#f5f5f5";
        document.getElementById("searchBoxID").style.border = "#f5f5f5";
        document.getElementById("locationDotID").style.color = "#F2AA4C";
        document.getElementById("location").style.background = "#f5f5f5";
        document.getElementById("location").style.color = "#F2AA4C";
        document.getElementById("location-button").style.background = "#f5f5f5";
        document.getElementById("location-button").style.color = "#F2AA4C";
        
        document.getElementById("mode-button").className = "fa-solid fa-sun"
    } else if ( value === 1 ) {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#101820")
        document.body.style.background = "#101820";
        document.body.style.color = "#101820";
        
        document.getElementById("navbarID").style.background = "#101820";
        document.getElementById("mode-button").style.background = "#101820";
        document.getElementById("mode-button").style.color = "#F2AA4C";
        document.getElementById("github-button").style.background = "#101820";
        document.getElementById("github-button").style.color = "#F2AA4C";

        document.getElementById("containerID").style.background = "#F2AA4C";

        document.getElementById("searchBoxID").style.background = "#101820";
        document.getElementById("searchBoxID").style.border = "#101820";
        document.getElementById("locationDotID").style.color = "#F2AA4C";
        document.getElementById("location").style.background = "#101820";
        document.getElementById("location").style.color = "#F2AA4C";
        document.getElementById("location-button").style.background = "#101820";
        document.getElementById("location-button").style.color = "#F2AA4C";

        document.getElementById("mode-button").className = "fa-solid fa-moon"
    }
}