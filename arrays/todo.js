const todos=['complete js', 'start web', 'decide story', 'learn DS','allot tasks']
console.log('3rd item deleted from the list is:' + todos.splice(2,1))
todos.push('new last item')
console.log('first item removed from the list is:' +todos.shift())
console.log(`your new list have ${todos.length} todos:`)

todos.forEach(function(item, index){
    const num= index + 1
    console.log(`${num}. ${item}`)
})