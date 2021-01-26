var date = new Date();
var dayElapsed = date.getDate();
if ( dayElapsed <= 15){
	document.write("First fifteen days of the month");
}else{
	document.write("Last days of the month");
}