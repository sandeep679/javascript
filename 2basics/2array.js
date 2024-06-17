const marvel = ["thor","ironman","spiderman"]
const dc =["superman","flash","batman"]

//marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][2]);


//const all= marvel.concat(dc) // merge two array
//console.log(all);



//spread operator
// const allnew = [...marvel,...dc]
// console.log(allnew);



// const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realarray =array1.flat(Infinity)
// console.log(realarray);


console.log(Array.isArray("flash"));
console.log(Array.from("flash"));
console.log(Array.from({name:"flash"}));  //interesting


let score1 = 100
let score2 = 200
let score3 = 344

console.log(Array.of(score1,score2,score3));