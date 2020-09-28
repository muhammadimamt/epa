//Init
function hideForm(){
    for(let i = 1; i<= 25; i++){
    var element = document.getElementById(i);
    element.classList.add("invisible");
    }
}

hideForm();

//Datepicker
let today = new Date();

$('.datepicker').datepicker({
    autoclose: true,
    endDate: today,
    format: "dd-mm-yyyy"
});

//Substitutions Players
function allowDropSubstitute(e){ e.preventDefault(); }

function dropToSaveToSubstitute(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
            
    document.getElementById('player-unselected-slot').appendChild(document.getElementById(data));
}

//Enable Drag 
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }

//Join Player and their positions
player.forEach(function (e, v) {
    var position = positions.filter((x) => { return x.id == e.position });

    htmlString = '<div id="p-'+ e.backNumber +'" draggable="true" ondragstart="drag(event)" class="list-group-item list-group-item-dark d-flex justify-content-between mt-2">' +
        '<span class="font-weight-bold">' + e.name + '</span>' +
        '<div><span class="font-weight-bold">' + e.backNumber + ' &nbsp;</span>' +
        '<span class="badge badge-' + position[0].badge + '"> ' + position[0].positionName + ' </span></div></div>';
        
    document.getElementById('player-slot').innerHTML += htmlString;
});
        
//Formation Form Settings
let formationSelect = document.getElementById('formation-select');

formations.forEach(function (e, v) {
    htmlString = '<option value="' + e.id + '">' + e.name + '</option>';
    formationSelect.innerHTML += htmlString;
});

formationSelect.onchange = function(e){
    hideForm();

    if(formationSelect.value == 0) return;

    var register = registerFormation.filter((x) => { return x.formationId ==  formationSelect.value});

    register.forEach(function(e, v){
        document.getElementById(e.positionId).classList.remove("invisible");
    });
}

for(let i = 1; i<= 25; i++){
    document.getElementById(i).addEventListener("ondragover", function(e){
        e.preventDefault();
    });

    document.getElementById(i).addEventListener("ondrop", function(e){
        e.preventDefault();
        var data = e.dataTransfer.getData("text");

        console.log(i);
    
        document.getElementById(i).innerHTML = data.replace("p-", "");
    });
}

//Validate Clock
let afterHour = document.getElementById("after-hour");
let afterMinute = document.getElementById("after-minute");
let beforeHour = document.getElementById("before-hour");
let beforeMinute = document.getElementById("before-minute");

function validateStartEnd(){
    if(afterHour.value < beforeHour.value) {
        document.getElementById("clock-behind-alert").classList.remove("d-none");
        document.getElementById("minutes-notifier").classList.add("d-none");
        return;
    }

    if(afterHour.value == beforeHour.value){
        if(afterMinute.value < beforeMinute.value){
            document.getElementById("clock-behind-alert").classList.remove("d-none");
            document.getElementById("minutes-notifier").classList.add("d-none");
            return;
        }
    }

    document.getElementById("clock-behind-alert").classList.add("d-none");

    let minutes = 60 * (afterHour.value - beforeHour.value) + (afterMinute.value - beforeMinute.value);
    document.getElementById("minutes").innerHTML = minutes;
    
    document.getElementById("minutes-notifier").classList.remove("d-none");

}

afterHour.addEventListener("change", validateStartEnd);
afterMinute.addEventListener("change", validateStartEnd);
beforeHour.addEventListener("change", validateStartEnd);
beforeMinute.addEventListener("change", validateStartEnd);

//Select2
$('.js-select2').select2();