$(document).ready(function() {
  $(".saveBtn").on("click", function() {

// tracks current date information for header
var todayDate = moment();
// tracks current hour for comparison to hour time blocks in function timeCheck

var today = $("#currentDay");

// reconfigures date format from "moments" to correct format for header from mockup....the specified format was not found in "moments"

   // Save button click listener
  
    
    // get parent element id from button click
    var hourId = $(this).parent().attr("id");
    
    // get text from sibling textarea element to the button
    var text = $(this).siblings(".description").val();

  // creat local storage
  localStorage.setItem(hourId, text);
  });

  $("#time8 .description").val(localStorage.getItem("time8"));
  $("#time9 .description").val(localStorage.getItem("time9"));
  $("#time10 .description").val(localStorage.getItem("time10"));
  $("#time11 .description").val(localStorage.getItem("time11"));
  $("#time12 .description").val(localStorage.getItem("time12"));
  $("#time1 .description").val(localStorage.getItem("time1"));
  $("#time2 .description").val(localStorage.getItem("time2"));
  $("#time3 .description").val(localStorage.getItem("time3"));
  $("#time4 .description").val(localStorage.getItem("time4"));
  $("#time5 .description").val(localStorage.getItem("time5"));
  $("#time6 .description").val(localStorage.getItem("time6"));

  function timeCheck() {
    var hourCurrent = moment().hour();
    // loop over time-blocks to identify "hour" to compare against current time and style to past, present, future
    $(".time-block").each(function () {
        //identifies and uses hour value from timeblock id for comparison to current time
        var timeBlock = parseInt($(this).attr("id").split("time")[1]);
        console.log(timeBlock);
        // compares timeb-lock hour to current hour and identifies and styles timeblocks in the past
        if (timeBlock < hourCurrent) {
            $(this).addClass('past');
         }
        // compares time-block hour to current hour and identifies and style timeblock in the present hour
        else if (timeBlock === hourCurrent) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // compares time-block hour to current hour and identifies and style timeblocks in the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    });
  }
timeCheck();
})
