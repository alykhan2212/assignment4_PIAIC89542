var input = prompt("Please enter a number?","e.g. 0 1 2 or 3");
var inputArray = input.split("");
var total = 0;
for (var i=0; i < input.length; i++){
	inputArray[i] = parseInt(inputArray[i]);
	if (inputArray[i]){
	total += inputArray[i];
	}
}
document.write("The number entered is ",input);
document.write("<br>");
document.write("The mean of all digits is ",total/input.length);