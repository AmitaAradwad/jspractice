let myaccount={
    name:'amita',
    income:0,
    expenses:0
}
let timaccount={
    name:'tim',
    income:0,
    expenses:0
}

let addexpenses= function(account,amtspend){

 account.expenses=account.expenses+amtspend
}
let addincome= function(account,newincome){
    account.income=account.income+ newincome

}
let getsummary=function(account){
    balance=account.income-account.expenses
console.log(`summary for ${account.name}'s account : It has balance of $${balance},$${account.income}income,$${account.expenses} expenses`)
}
let resetaccount=function(account){
    account.income=0
    account.expenses=0
console.log(`resetting ${account.name}'s account we get`)    
console.log(account);
// console.log(`Resetting ${account.name} account gives ${account}` )
}
addincome(timaccount,25000)
addexpenses(timaccount,3000)
getsummary(timaccount)
resetaccount(timaccount)
