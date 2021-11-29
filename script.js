// tracks current date information for header
var todayDate = moment();
// tracks current hour for comparison to hour time blocks in function timeCheck
var hourCurrent = moment().hour();
var today = $("#currentDay");

// reconfigures date format from "moments" to correct format for header from mockup....the specified format was not found in "moments"
$(document).ready(function() {
  dayName = todayDate.format("dddd")
  month = todayDate.format("MMMM")
  day = todayDate.format("Do")
  today.text(dayName + ", " + month + " " + day);
})

$(document).ready(function() {

   // Save button click listener
  $(".saveBtn").on("click", function() {
    
    // get parent element id from button click
    var hourId = $( this )
      .parent()
      .get(0)
      .id;
    
    // get text from sibling textarea element to the button
    var text = $(this)
    .siblings("#timeText")
    .val();

  // creat local storage
  localStorage.setItem(hourId, text);
  });

  $("#time8 #timeText").val(localStorage.getItem("time8"));
  $("#time9 #timeText").val(localStorage.getItem("time9"));
  $("#time10 #timeText").val(localStorage.getItem("time10"));
  $("#time11 #timeText").val(localStorage.getItem("time11"));
  $("#time12 #timeText").val(localStorage.getItem("time12"));
  $("#time1 #timeText").val(localStorage.getItem("time1"));
  $("#time2 #timeText").val(localStorage.getItem("time2"));
  $("#time3 #timeText").val(localStorage.getItem("time3"));
  $("#time4 #timeText").val(localStorage.getItem("time4"));
  $("#time5 #timeText").val(localStorage.getItem("time5"));
  $("#time6 #timeText").val(localStorage.getItem("time6"));

  function timeCheck() {
       
    // loop over time-blocks to identify "hour" to compare against current time and style to past, present, future
    $(".time-block").each(function () {
        //identifies and uses hour value from timeblock id for comparison to current time
        var timeBlock = parseInt($(this).attr("id").split("time")[1]);
        console.log(timeBlock);
        // compares timeb-lock hour to current hour and identifies and styles timeblocks in the past
        if (timeBlock < hourCurrent) {
            $(this).find("#timeText").removeClass("future");
            $(this).find("#timeText").removeClass("present");
            $(this).find("#timeText").addClass("past");
        }
        // compares time-block hour to current hour and identifies and style timeblock in the present hour
        else if (timeBlock === hourCurrent) {
            $(this).find("#timeText").removeClass("past");
            $(this).find("#timeText").removeClass("future");
            $(this).find("#timeText").addClass("present");
        }
        // compares time-block hour to current hour and identifies and style timeblocks in the future
        else {
            $(this).find("#timeText").removeClass("present");
            $(this).find("#timeText").removeClass("past");
            $(this).find("#timeText").addClass("future");

        }
    })
  }
timeCheck();
})
