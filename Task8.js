var input = prompt("Please enter number?","23");
var newInput = parseInt(input);
var input1 = prompt("Please enter number?","123");
var newInput = parseInt(input1);

document.write("<b><u>Input</u></b>"); document.write("<br>");
document.write(input); document.write("<br>");
document.write(input1); document.write("<br>");
document.write("<br>");document.write("<br>");
document.write("<b><u>Output</u></b>"); document.write("<br>");

var ones = [" ","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]; 
var teen = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var teez = ["Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"];

if ( input.length == 1){
	for ( var i=0; i<ones.length; i++){
		if ( input[0] == i){
		document.write(ones[i]);document.write("<br>");
		}
	}
}else if ( input.length == 2 && input <= 19){
	for ( var i=0; i<teen.length; i++){
		if ( input == i+10){
		document.write(teen[i]);document.write("<br>");
		}
	}
}else if ( input.length == 2 && input > 19 && input < 100){
	for ( var i=0; i<ones.length; i++){
		if ( input == i+20){
		document.write(teez[0]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+30){
		document.write(teez[1]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+40){
		document.write(teez[2]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+50){
		document.write(teez[3]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+60){
		document.writeg(teez[4]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+70){
		document.write(teez[5]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+80){
		document.write(teez[6]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+90){
		document.write(teez[7]+" "+ones[i]);document.write("<br>");
		}
	}
}else if ( input.length == 3  && input == 100){
		document.write(ones[1]+" Hundred");document.write("<br>");
}else if ( input.length == 3  && input > 100 && input < 110){
	for ( var i=0; i<ones.length; i++){
		if ( input == i+100){
		document.write(ones[1]+" Hundred and "+ones[i]);document.write("<br>");
		}
	}
}else if ( input.length == 3  && input > 109 && input < 120){
	for ( var i=0; i<ones.length; i++){
		if ( input == i+110){
		document.write(ones[1]+" Hundred and "+teen[i]);document.write("<br>");
		}
	}
}else if ( input.length == 3 && input > 119 && input < 200){
	for ( var i=0; i<ones.length; i++){
		if ( input == i+120){
		document.write(ones[1]+" Hundred and "+teez[0]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+130){
		document.write(ones[1]+" Hundred and "+teez[1]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+140){
		document.write(ones[1]+" Hundred and "+teez[2]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+150){
		document.write(ones[1]+" Hundred and "+teez[3]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+160){
		document.write(ones[1]+" Hundred and "+teez[4]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+170){
		document.write(ones[1]+" Hundred and "+teez[5]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+180){
		document.write(ones[1]+" Hundred and "+teez[6]+" "+ones[i]);document.write("<br>");
		}else if ( input == i+190){
		document.write(ones[1]+" Hundred and "+teez[7]+" "+ones[i]);document.write("<br>");
		}
	}
}else{
	document.write("You have entered a number greater or equal to 200");
}

if ( input1.length == 1){
	for ( var i=0; i<ones.length; i++){
		if ( input[0] == i){
		document.write(ones[i]);document.write("<br>");
		}
	}
}else if ( input1.length == 2 && input1 <= 19){
	for ( var i=0; i<teen.length; i++){
		if ( input1 == i+10){
		document.write(teen[i]);document.write("<br>");
		}
	}
}else if ( input1.length == 2 && input1 > 19 && input1 < 100){
	for ( var i=0; i<ones.length; i++){
		if ( input1 == i+20){
		document.write(teez[0]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+30){
		document.write(teez[1]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+40){
		document.write(teez[2]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+50){
		document.write(teez[3]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+60){
		document.writeg(teez[4]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+70){
		document.write(teez[5]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+80){
		document.write(teez[6]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+90){
		document.write(teez[7]+" "+ones[i]);document.write("<br>");
		}
	}
}else if ( input1.length == 3  && input1 == 100){
		document.write(ones[1]+" Hundred");document.write("<br>");
}else if ( input1.length == 3  && input1 > 100 && input1 < 110){
	for ( var i=0; i<ones.length; i++){
		if ( input1 == i+100){
		document.write(ones[1]+" Hundred and "+ones[i]);document.write("<br>");
		}
	}
}else if ( input1.length == 3  && input1 > 109 && input1 < 120){
	for ( var i=0; i<ones.length; i++){
		if ( input1 == i+110){
		document.write(ones[1]+" Hundred and "+teen[i]);document.write("<br>");
		}
	}
}else if ( input1.length == 3 && input1 > 119 && input1 < 200){
	for ( var i=0; i<ones.length; i++){
		if ( input1 == i+120){
		document.write(ones[1]+" Hundred and "+teez[0]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+130){
		document.write(ones[1]+" Hundred and "+teez[1]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+140){
		document.write(ones[1]+" Hundred and "+teez[2]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+150){
		document.write(ones[1]+" Hundred and "+teez[3]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+160){
		document.write(ones[1]+" Hundred and "+teez[4]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+170){
		document.write(ones[1]+" Hundred and "+teez[5]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+180){
		document.write(ones[1]+" Hundred and "+teez[6]+" "+ones[i]);document.write("<br>");
		}else if ( input1 == i+190){
		document.write(ones[1]+" Hundred and "+teez[7]+" "+ones[i]);document.write("<br>");
		}
	}
}else{
	document.write("You have entered a number greater or equal to 200");
}