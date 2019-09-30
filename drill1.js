
function sheep(n){
  if (n === 0){
    console.log('No more sheep')
  } else {
    console.log(`${n}: Another sheep jumped over the fence`)
    sheep(n-1)
  }
}

function powerCalculator(base, power){
  if (power <= 0){
    return('Power should be >= 0')
  } else if (power === 1){
    return base
  } else {
    return base * powerCalculator( base, power-1)
  }
}


function reverseString(input){
  if (input === ''){
    return ''
  } else {
    return input.slice(-1) + reverseString(input.slice(0, -1))
  }
}

console.log(reverseString('pineapple'))