let getconv=function(fahrenheit) {
     celsius= ((fahrenheit-32)*5) / 9;
     kelvin= ((fahrenheit + 459.67)*5) / 9;
 return{
     tempinfahrenheit:`The temperature is : ${fahrenheit}F`,
    tempincelsius:`The temperature is : ${celsius} C`,
    tempinkelvin:`The temperature is : ${kelvin} K`
 }

}

let tempconv= getconv(104)

console.log(tempconv);
