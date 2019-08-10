let tipcalc= function (total,tip=.2){
    result=(total*tip)/ 100;
    return `A ${25}% tip on $${total} would be $${result}`
}
let tipgiven= tipcalc(40,25);
console.log(tipgiven);
