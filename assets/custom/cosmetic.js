let inputNumberOnly = document.getElementsByClassName("input-number-only");

for(let i = 0; i < inputNumberOnly.length; i++){
    inputNumberOnly[i].addEventListener("keypress", function(evt){
        if(evt.which < 48 || evt.which > 57)
            evt.preventDefault();
    });
}

let hourBox = document.getElementsByClassName("hour");
let minuteBox = document.getElementsByClassName("minute");

for(let i = 0; i < hourBox.length; i++){
    hourBox[i].addEventListener("keyup", function(){
        if(hourBox[i].value > 23) hourBox[i].value = 23;
        if(hourBox[i].value < 0) hourBox[i].value = 0;
    });
}

for(let i = 0; i < minuteBox.length; i++){
    minuteBox[i].addEventListener("keyup", function(){
        if(minuteBox[i].value > 59) minuteBox[i].value = 59;
        if(minuteBox[i].value < 0) minuteBox[i].value = 0;
    });
}

let clockBox = document.getElementsByClassName("clock");

for(let i = 0; i < clockBox.length; i++){
    clockBox[i].addEventListener("focus", function(e){
        clockBox[i].value = 0;
        this.select();
    });

    clockBox[i].addEventListener("keypress", function(e){
        if(clockBox[i].value == 0 && e.which == 48) e.preventDefault();
    });

    clockBox[i].addEventListener("change", function(){
        newString = "";

        if(clockBox[i].length != 1 && clockBox[i].value != "0"){
            pivot = false;
            for(let j = 0; j< clockBox[i].value.length; j++){
                if(clockBox[i].value.charAt(j) != "0") pivot = true;

                if(pivot) newString += clockBox[i].value.charAt(j);
            }
        }

        clockBox[i].value = newString;

        if(clockBox[i].value < 10){
            clockBox[i].value = "0" + clockBox[i].value;
        }
    });
}