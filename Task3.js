let pass = prompt("Please enter your password");

let patt1 = "^[a-zA-Z0-9]{8}$";
let patt2 = "^[a-zA-Z].*";

if(pass.match(patt1) && pass.match(patt2)){
    document.write("Valid Password");
}else{
    document.write("Please enter a valid password that contains a-z, A-Z & 0-9");
}