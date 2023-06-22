const names = ['Guadalupe', 'ollie', 'Aki']
function writeCards (names, event){
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
    }

console.log(writeCards(names, "for the wonderful gifts"))


function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i)
    }
}