function fillBus (peopleAtBusStops, busSeats){
  let total = 0
  let i = 0
  if (Array.isArray(busStops)) ||typeof busSeats !=='number'|| busSeats
  < 0){
    return -1
}
while(i < busStops.length){
    total+= busStops[i];
    if(total>= busSeats){
        return i 
    }
    i++
}
return -1
}
console.log(fillBus([1, 3, 10, 1] 12))
function capitalize(words){
    return words.map(word => word.toUpperCase());
}
const result = capitalize (["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR",  "FUNCTION", "TO", "test","IT", "OUT"])
displayResult(result)
