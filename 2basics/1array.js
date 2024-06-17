//array

const myarr =[0,1,2,3,4,7,8 ]
//onsole.log(myarr[2]);  // accessing

const myheroes =["ironman", "gogo"]

const myArr2 =new Array(1,4,6,3,56)
//console.log(myArr2[2]);


//array methods

//myarr.push(6)         //push
// myarr.push(8)
// console.log(myarr);

//myarr.pop()             //pop
//console.log(myarr);


   //place element at first place
//myarr.unshift(10) 
//myarr.shift()


   // include element

   // console.log(myarr.includes(9));        
// console.log(myarr.indexOf(7));
 


   // its separate

   //const newArr3 =myarr.join()     
// console.log(myarr);
// console.log(newArr3);


// slice splice

console.log("A", myarr);
const my = myarr.slice(1,3)
console.log("B",my);

const my2= myarr.splice(1,3)
console.log(my2);