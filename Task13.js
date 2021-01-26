var date = new Date();
document.write("Current Date: ",date);document.write("<br>");
var nowMilliSec = Date.now();
document.write("Elapsed Milliseconds since January 01, 1970: ",nowMilliSec);document.write("<br>");
var nowMinutes = nowMilliSec/(1000*60)
document.write("Elapsed Minutes since January 01, 1970: ",nowMinutes);