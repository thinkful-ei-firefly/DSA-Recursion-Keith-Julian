
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

// console.log(reverseString('pineapple'))


function nthTriangular(num){
  if (num === 1){
    return 1;
  } else {
    return num + nthTriangular(num - 1)
  }
}

// console.log(nthTriangular(4))

function stringSplitter(string, seperator){
  if (string === ''){
    return '';
  }else{
    let nString = string.slice(0, 1);
    if (nString.toString() === seperator){
      return stringSplitter(string.slice(1), seperator)
    } else {
      return nString + stringSplitter(string.slice(1), seperator)
    }
  }
}

// console.log(stringSplitter('20/20/2020', '/'))

function fibonacci(num){
  // console.log(num)
  if (num <= 0){
    return 'num must be greater than 0'
  }else if (num === 1 || num === 2){
    return 1
  }else{
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}

//console.log(fibonacci(13))

function factorial(num){
  if (num === 1)
    return 1
  else 
    return num * factorial(num - 1)
}

//console.log(factorial(5))

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolve(maze, current){
  let x = current[0]
  let y = current[1]
  console.log(`${x}:${y}`)
  if (x < 0 || x >= 3 || y < 0 || y >= 3){
    return false
  }
  if (maze[x][y] === '*'){
    return false
  }
  if (maze[x][y] === 'e'){
    return ': exit'
  } else {
    maze[x][y] = '*'
    if (y-1 <= 5 && y-1 >= 0 && maze[x][y-1]!== '*'){
      return 'U' + mazeSolve(maze, [x, y-1])
    }
    if (x+1 <= 7 && x+1 >= 0 && maze[x+1][y]!== '*'){
      return 'R' +mazeSolve(maze, [x+1, y])
    }
    if (y+1 <= 5 && y+1 >= 0 && maze[x][y+1]!== '*'){
      return 'D' + mazeSolve(maze, [x, y+1])
    }
    if (x-1 <= 7 && x-1 >= 0 && maze[x-1][y]!== '*'){
      return 'L' + mazeSolve(maze, [x-1, y])
    }  
  }
}

console.log(mazeSolve(maze, [0,0]))

 