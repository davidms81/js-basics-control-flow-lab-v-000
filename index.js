// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400){
    return `This one is on me!`
  } else if (someValue > 2000 && someValue < 2501){
    return `I will gladly take your thirty bucks.`
  } else if (someValue > 2500){
    return `No can do.`
  }
}

function ternaryCheckCity(city){
  city === `NYC` ? `Ok, sounds good.` : return `No go.`
}
