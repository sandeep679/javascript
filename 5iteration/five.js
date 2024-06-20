//3  for each

const pro =["js","rb","py","java"]

// pro.forEach( function (val){
//     console.log(val);                //1 method
// })

// pro.forEach((item)=>{
//     console.log(item);     // 2method
// })

// function printme(item){    // 3method
//     console.log(item);
// }
// pro.forEach(printme)


// pro.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const coding =[
    {
        language:"javascript",
        filename:"js"
    },
    {
        language:"java",
        filename:"java"
    },
    {
        language:"python",
        filename:"py"
    }
]

coding.forEach((val)=>{
    console.log(val);
})
coding.forEach((val)=>{
    console.log(val.filename);
})
coding.forEach((val)=>{
    console.log(val.language);
})