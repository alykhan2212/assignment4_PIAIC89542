let email = prompt("Please enter a valid email address");
let a = email.includes("@");
let b = email.indexOf("@");
let c = email.includes(".");
if (!a){
    alert("The email address shall contain @ sign");
}
else if (email.charAt(/0-9/g) >= 0){
    alert("The email address shall contain characters");
}
else if (b === 0){
    alert("The email address shall have atleast one char in front");
}
else if (email.indexOf(".") === 1+b){
    alert("The email address shall have .(dot) after @ and atleast one char");
}else{
    alert("You have entered a valid email address!");
}