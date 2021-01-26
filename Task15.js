var input = prompt("Please enter your age");
input = parseInt(input);
var date = new Date();
var dateString = date.toString();
var year = dateString.slice(11,15);
year = parseInt(year);
document.write("Your Age is: ",input);document.write("<br>");
document.write("Your birth year is: "+(year-input));