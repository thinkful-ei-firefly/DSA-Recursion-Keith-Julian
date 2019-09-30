
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
  if (maze[y][x] === 'e'){
    return ': exit'
  } else {
    maze[y][x] = '*'
    if (y-1 >= 0 && maze[y-1][x]!== '*'){
      console.log('up')
      return 'U' + mazeSolve(maze, [x, y-1])
    }
    if (x+1 <= 6 && maze[y][x+1]!== '*'){
      console.log('right')
      return 'R' +mazeSolve(maze, [x+1, y])
    }
    if (y+1 <= 4 && maze[y+1][x]!== '*'){
      console.log('down')
      return 'D' + mazeSolve(maze, [x, y+1])
    }
    if (x-1 >= 0 && maze[y][x-1]!== '*'){
      console.log('left')
      return 'L' + mazeSolve(maze, [x-1, y])
    }  
  }
}

//console.log(mazeSolve(maze, [0,0])) //x, y

function mazeSolveAll(maze, current, path){
  let mapCopy = maze.map(x => [...x])
  let x = current[0]
  let y = current[1]
  if (x < 0 || y < 0 || x >= mapCopy[0].length || y >= mapCopy.length || maze[y][x] === '*'){
    return false
  }
  if (maze[y][x] === 'e'){
    console.log(path)
    return true
  }
  if (maze[y][x] === ' ') {
    mapCopy[y][x] = '*' 
    
    mazeSolveAll(mapCopy, [x, y-1], path + 'U')
    mazeSolveAll(mapCopy, [x+1, y], path + 'R')
    mazeSolveAll(mapCopy, [x, y+1], path + 'D')
    mazeSolveAll(mapCopy, [x-1, y], path + 'L')  
  }
}
 
// mazeSolveAll(maze, [0,0], '')


function anagrams(string){
  let wordArray = string.split('');
  if (wordArray.length === 1){

  }else{
    // for (let i=0; i < wordArray.length; i++){
    //   const prefix = string[i]
    //   const remaining = st
    // }
  }

}

// anagrams('hello')

let heiarchy = {
  Zuckerber: {
    Schroepfer: {
      Bosworth: {
        Steve: "Steve",
        Kyle: "kyle",
        Andra: "Andra"
      },
      Zhao: {
        Richie: "Richie",
        Sofia: "Sofia",
        Jen: "Jen"
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: "Sabrina",
        Michelle: "Michelle",
        Josh: "Josh"
      },
      Swain: {
        Blanch: "Blanch",
        Tom: "Tom",
        Joe: "Joe"
      }
    },
    Sandberg: {
      Goler: {
        Eddie: "Eddie",
        Julie: "Julie",
        Annie: "Annie"
      },
      Hernandez: {
        Rowi: "Rowi",
        Inga: "Inga",
        Morgan: "Morgan"
      },
      Moissinac: {
        Amy: "Amy",
        Chuck: "Chuck",
        Vinni: "Vinni"
      },
      Kelley: {
        Eric: "Eric",
        Ana: "Ana",
        Wes: "Wes"
      } 
    }
  }
}

function orgChart(heiarchy, indent=''){
  // let indent = '  ';

  if (typeof heiarchy === 'object') { 
    for (const key in heiarchy) { 
      console.log(indent + key)
      orgChart(heiarchy[key], indent+'    '); } 
    } else { 
      // console.log(heiarchy); 
    }
  }
// orgChart(heiarchy)


function isBinary(n){
  if (n <= 1){
    return n.toString();
  }
  const firstBit = n & 1;
  const binaryFirstBit = isBinary(firstBit);
  const restOfBits = n >> 1;
  const binaryOfRestOfBits = isBinary(restOfBits);
  return binaryFirstBit + binaryOfRestOfBits;
}

console.log(isBinary(3));
console.log(isBinary(25));


function allanagrams(string){

  if(string.length === 0) return [''];
    var result = {};
    string.split('').forEach(function(letter,i){
          var remainingLetters = string.slice(0,i) + string.slice(i+1);
 
           allanagrams(remainingLetters).forEach(
               function(anagram){
           result[letter+anagram] = true;
 });
 });
        return Object.keys(result);
        
 }
 
 var str = 'east';
 console.log(allanagrams(str));