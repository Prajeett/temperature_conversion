
document.getElementById("submitBtn").onclick= function(){
let temp;

if (document.getElementById("celsiusRadio").checked){
temp = document.getElementById("inputTemp").value;
temp = Number(temp);
temp = toCelsius(temp);
document.getElementById("convertedTemp").innerHTML = `The temperature is ${temp}°C`;


}
else if(document.getElementById("farhrenheitRadio").checked) {

    temp = document.getElementById("inputTemp").value;
    temp = Number(temp);
    temp = toFarhrenheit(temp);
    document.getElementById("convertedTemp").innerHTML = `The temperature is ${temp}°C`;
    


}

else{

    document.getElementById("convertedTemp").innerHTML = "Please select a unit";
}


}









function toCelsius(temp){
    return (temp-32) * (5/9);
}


function toFarhrenheit(temp){
    return temp * 9/5 + 32;
}