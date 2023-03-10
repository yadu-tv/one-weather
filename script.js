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

//to click the button on pressing enter key
window.onload = function() {
    var input = document.getElementById("location");

    input.addEventListener("keypress", function(event) {
        if( event.key === "Enter" ) {
            event.preventDefault();
            document.getElementById("location-button").click();
        }
    });
}

//checks if location exists and calls revealLocation or revealNoLocationWarning
function checkLocation () {
    var x = document.getElementById("location").value;
    x.toString();
    var yes = 'yes';
    yes.toString();
    if (x) {
        if( x === yes ) {
            revealLocation();
        } else {
            revealNoLocationWarning();
        }
    } else {
        console.log("enter a value");
        startPage();
    }
}


const api_key = "e86b10876f017da658a0a925e5312540";