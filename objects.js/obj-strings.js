let isvalidpassword= function(password){
   
return (password.length>8 && !password.includes('password')) 
                  
}

console.log(isvalidpassword('hello'))
// console.log('first line')
console.log(isvalidpassword('hhbvrdogovg,fnkugh'))

console.log(isvalidpassword('hepassword213234'))