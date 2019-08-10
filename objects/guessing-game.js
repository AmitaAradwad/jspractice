let game= function(guessnum){
    let min=1
    let max=5
    let randomval=Math.floor(Math.random() *(max-min +1))  + min

return(guessnum===randomval)
    }

// console.log(game())
console.log(game(3))
console.log(game(2))
console.log(game(4))
console.log(game(1))
console.log(game(5))