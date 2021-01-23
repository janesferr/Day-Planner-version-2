
// var myDay = [
//     {
//         id: "0",
//         hour: "9",
//         time: "09",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "1",
//         hour: "10",
//         time: "10",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "2",
//         hour: "11",
//         time: "11",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "3",
//         hour: "12",
//         time: "12",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "4",
//         hour: "1",
//         time: "13",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "5",
//         hour: "2",
//         time: "14",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "6",
//         hour: "3",
//         time: "15",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "7",
//         hour: "4",
//         time: "16",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "8",
//         hour: "5",
//         time: "17",
//         meridiem: "pm",
//         reminder: ""
//     },
    
// ]

// // gets data for the header date
// function getHeaderDate() {
//     var currentHeaderDate = moment().format("dddd, MMMM Do YYYY");
//     $("#currentDay").text(currentHeaderDate);
// }

// // saves data to localStorage
// function saveReminders() {
//     localStorage.setItem("myDay", JSON.stringify(myDay));
// }

// // sets any data in localStorage to the view
// function displayReminders() {
//     myDay.forEach(function (_thisHour) {
//         $(`#${_thisHour.id}`).val(_thisHour.reminder);
//     })
// }

// // sets any existing localStorage data to the view if it exists
// function init() {
//     var storedDay = JSON.parse(localStorage.getItem("myDay"));

//     if (storedDay) {
//         myDay = storedDay;
//     }

//     saveReminders();
//     displayReminders();
// }

// // loads header date
// getHeaderDate();

// // creates the visuals for the scheduler body
// myDay.forEach(function(thisHour) {
//     // creates timeblocks row
//     var hourRow = $("<form>").attr({
//         "class": "row"
//     });
//     $(".container").append(hourRow);

//     // creates time field
//     var hourField = $("<div>")
//         .text(`${thisHour.hour}${thisHour.meridiem}`)
//         .attr({
//             "class": "col-md-2 hour"
//     });

//     // creates schdeduler data
//     var hourPlan = $("<div>")
//         .attr({
//             "class": "col-md-9 description p-0"
//         });
//     var planData = $("<textarea>");
//     hourPlan.append(planData);
//     planData.attr("id", thisHour.id);
//     if (thisHour.time < moment().format("HH")) {
//         planData.attr ({
//             "class": "past", 
//         })
//     } else if (thisHour.time === moment().format("HH")) {
//         planData.attr({
//             "class": "present"
//         })
//     } else if (thisHour.time > moment().format("HH")) {
//         planData.attr({
//             "class": "future"
//         })
//     }

//     // creates save button
//     var saveButton = $("<i class='far fa-save fa-lg'></i>")
//     var savePlan = $("<button>")
//         .attr({
//             "class": "col-md-1 saveBtn"
//     });
//     savePlan.append(saveButton);
//     hourRow.append(hourField, hourPlan, savePlan);
// })

// // loads any existing localstorage data after components created
// init();


// // saves data to be used in localStorage
// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//     myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
//     console.log(saveIndex);
//     saveReminders();
//     displayReminders();
// })
var dayHour = [
    {
        id: "0",
        hour: "9",
        time: "09",
        meridiem: "am",
        appt: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        appt: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        appt: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        appt: ""
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "pm",
        appt: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "pm",
        appt: ""
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        meridiem: "pm",
        appt: ""
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        meridiem: "pm",
        appt: ""
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        meridiem: "pm",
        appt: ""
    },
    
]

function dateOntop(){
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    
}



//saving to localStorage
function saveAppt(event){
    event.preventDefault();
    localStorage.setItem("dayHour", JSON.stringify(dayHour));
    console.log(dayHour);
}
//Displays the appointment
function tellmeAppt(){
    dayHour.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.appt);
    })
}

//gets what's in the locatStorage data 
function getStorage() {
    var getStorage = JSON.parse(localStorage.getItem("dayHour"));

    if (getStorage){
        dayHour = getStorage;
    }

    saveAppt();
    tellmeAppt();
}
dateOntop();

// $.each( dayHour, function( key, value ) {
//     // alert( key + ": " + value );
//   });

//creates the hours and look of the page
    //create all the time
dayHour.forEach(function(thisHour) {
   
    //create a row with a div tag after the container
    var hour = $("<div>").attr("class", "row");
    $(".container").append(hour);

    //gets the time from the object 
    var hourLine = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`);
    hourLine.attr("class", "col-md-2 hour");
    hour.append(hourLine);
     
    //creates the text data
    var textAppt = $("<div>").attr("class", "col-md-9 description p-0");

    var textData = $("<textarea>");
        textAppt.append(textData);
        textData.attr("id", thisHour.id);


    var momentInTime = moment().format("HH");
        if(thisHour.time < momentInTime) {
            textData.attr({"class" : "past"})
        }
        else if (thisHour.time === momentInTime) {
            textData.attr("class", ".present")
        }
        else if (thisHour.time > momentInTime) {
            textData.attr("class", ".future")
        }
        
    
 // creates the Button
 var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);


 })


//load data
// init();

// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    dayHour[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})