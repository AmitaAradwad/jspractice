let gradecal= function(studentscore,totalpossiblescore){
    return (studentscore/totalpossiblescore)*100;

}
let result=gradecal(20,20)
// console.log(`you got ${(result)}%`);
if(result<=59)
{
    console.log(`you got E grade with ${(result)}%`)

} else if(result<=69){
    console.log(`you got D grade with ${(result)}%`)

}else if(result<=79){
    console.log(`you got C grade with ${(result)}%`)

}else if(result<=89){
    console.log(`you got B grade with ${(result)}%`)
} else if(result<=100){
    console.log(`you got A grade with ${(result)}%`)

}
