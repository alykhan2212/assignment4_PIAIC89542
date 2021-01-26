var htmlTags = "<p><strong><em>Only print this</em></strong></p>"
var index1 = htmlTags.indexOf("Only");
var index2 = htmlTags.indexOf("</");
document.write("Output:"); document.write("<br>");
var output = htmlTags.slice(index1, index2);
document.write(output);