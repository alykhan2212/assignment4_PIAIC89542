var text = "The quick brown fox jumps over the lazy dog";
var frequency = text.match(/the/gi);

document.write("Text: ",text); document.write("<br>");
document.write("There are "+frequency.length+" occurance(s) of the word 'the'");