//date


// let mydate =new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log( typeof mydate);



// let createdate = new Date(2023,0,23) //for specifice date
//console.log(createdate.toDateString());

// let createdate2 = new Date(2023,0,23,5,3)
// let createdate2 = new Date("2023-01-14")
let createdate2 = new Date("01-14-2023")
// console.log(createdate2.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(createdate2.getTime());
//console.log(Math.floor(Date.now()/1000));  //for conversion in seconds

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

newdate.toLocaleString('default',{    //for specfice date modify
    weekday:"long"
})





