    //HIGH ORDER ARRAY LOOPS

//1 for of

//  const arr=[1,2,4,6,7]

//  for (const num of arr) {
//     console.log(num);
    
//  }
 
//  const greet ="Hello"
//  for (const num of greet) {
//     console.log("each chart is",num);
    
//  }

const map = new Map()
map.set('IN',"INDIA")
map.set('UK',"UNITED kingdom")
map.set('FR',"France")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    console.log(key,value);
}

const object ={    // it is not  iteratable
    'game':'nfs',
    'game2':'spider'
}