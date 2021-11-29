# Work Day Scheduler Starter Code

## Bootcamp Challenge 5

The purpose of this excercise is to modify existing code for a single day business hour calendar to feature current date, editable user input for hourly time blocks and time specific styling relative to current time.

- Motivation: Test what has been learned through practical application and testing of Jquery, Javascript, CSS and HTML related to the construct of this assignment

- Project: Take the lessons learned from languages learned to date (HTML, CSS, Javascript, JQuery) to review and modify existing code.  Implement best practices for scout rule, coding, GitHub repository building, README.md construction.

- Problem Solved: Code has been modified to meet acceptance criteria of this assignment.

- Lessons Learned: Many.  Coming straight off of Javascript, this assignment incorporated usage of newly learned JQuery.  More practice is needed to get more comfortable with, and fine tune usage of both Javascript and JQuery.  Attempts were made to use loops for array/object creation of time block id's, text areas and loading/getting data from local storage to no success.  Ultimately, used a conventional non dynamic structure and data flow


## Acceptance Criteria

- WHEN I open the planner / THEN the current day is displayed at the top of the calendar:  Used "moments" to bring in current date to show in the header.  However, I did not come across a format in the "moments" documentation that exactly matched the mockup.  Had to take specific segments "moments" formatted time and then concatenate those segments together to perfectly match the mockup.

- WHEN I scroll down / THEN I am presented with time blocks for standard business hours:  This was originally attempted with using dynamically created elements.  Upon further reviewing of the CSS file, seemed a better approach was to build multiple div segments for each time block inclusive with sub divs for a time reference container using 1 Bootstrap column width, a text area container using 8 Bootstrap column widths and a button container using 1 Bootstrap column width.

- WHEN I view the time blocks for that day / THEN each time block is color-coded to indicate whether it is in the past: "Moments" was used to capture current time.  The time-block containers had id's added where an hour value, representing that time-blocks time, was extracted using parsint and split.  This value when then compared to current time hour.  Then "if" statements were created to add/remove CSS styling classes based on the relation of time-block time to current time, based on "past", "present" and "future" time comparisons. 

- WHEN I click into a time block / THEN I can enter an event: Individual time-box div's were created for each hour of the business day.  Inside the time-block div's were additional containers, including a textarea div where user input could be entered.

- WHEN I click the save button for that time block / THEN the text for that event is saved in local storage:  A "click" event was created where the button for the time-block was evaluated for an id from it's parent div, and also an id for it's sibling textarea.  These values were loaded into local storage, where they were later retrievd and added back to their html elements.

- WHEN I refresh the page / THEN the saved events persist:  User input and time block parent div id's are loaded into local storage upon button "save" mouse click for that time black.  This data is then "gotten" from local storage and reloaded into their respective time-block and text area, based on the button parent div id and sibling textarea id.

## Git

Git repository (Challenge5) to hold assignment code and README.md.
https://github.com/RauchDavis13/Challenge5A.git


- Successfully created live Git based URL
https://rauchdavis13.github.io/Challenge5A/


## Thank you's....
Matthew Kim(Instructor)
Valeria Flores(TA)
Dustin Erwin (TA)
Robert Evanik
Adam Howard
Jacob Yarce
James Dabajo
