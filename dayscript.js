var dayHour = [
    {
        id: "0",
        hour: "9",
        time: "09",
        meridiem: "am",
        appt: " "
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        appt: " "
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        appt: " "
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        appt: " "
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
        appt: " "
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        meridiem: "pm",
        appt: " "
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        meridiem: "pm",
        appt: " "
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        meridiem: "pm",
        appt: " "
    },
    
]

function dateOntop(){
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(currentDate);
    
}



//saving to localStorage
function saveAppt(){

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
    var getStoredInfo = JSON.parse(localStorage.getItem("dayHour"));

    if (getStoredInfo){
        dayHour = getStoredInfo;
    }

    // saveAppt();
    // tellmeAppt();
}
dateOntop();

// $.each( dayHour, function( key, value ) {
//     // alert( key + ": " + value );
//   });

//creates the hours and look of the page
    //create all the time
dayHour.forEach(function(thisHour) {
   
    //create a row with a div tag after the container
    var hour = $("<form>").attr("class", "row");
    $(".container").append(hour);

    //gets the time from the object 
    var hourLine = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`);
    hourLine.attr("class", "col-md-2 hour");
    hour.append(hourLine);
     
    //creates the div tag and sets the attribures to be a certain column in length
    var textAppt = $("<div>").attr("class", "col-md-9 description p-0");
    hour.append(textAppt);

    var textData = $("<textarea>");
        textAppt.append(textData);
        textData.attr("id", thisHour.id);


    var momentInTime = moment().format("HH");
        if(thisHour.time < momentInTime) {
            textData.attr("class", "past")
        }
        else if (thisHour.time === momentInTime) {
            textData.attr("class", "present")
        }
        else if (thisHour.time > momentInTime) {
            textData.attr("class", "future")
        }
        
    
 // creates the Button
//make an image 
var saveButton = $("<img>");
//add a src & alt to the image
saveButton.attr("src",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FBpEgh-exyIaaS3W_W2Z_CeY2Ww5gBML8Q&usqp=CAU")
 .attr("alt", "pic Save").attr("width", "15%").attr("height", "15%")
//add a crystal class to it


//  var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hour.append(savePlan);


 });

// saves data to be used in localStorage
$(document).ready(function(){
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    saveAppt();
    // getStorage();
        var getStoredInfo = JSON.parse(localStorage.getItem("dayHour"));
    
        if (getStoredInfo){
            dayHour = getStoredInfo;
        }
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    console.log(saveIndex);
    dayHour.appt= $(this).siblings(".description").children(".future").val(); 
    // dayHour[saveIndex].appt = $("<textarea>").val().trim(); 
    console.log("This is the save Index:"  + saveIndex);
    console.log(dayHour.appt);
    // console.log("this is the appt that is beign saved" + dayHour[saveIndex].appt);
    // saveAppt();
    // tellmeAppt();
  });
});

