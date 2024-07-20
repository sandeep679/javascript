

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const des=Object.getOwnPropertyDescriptor(Math,"PI")                              // it give hidden info about object 
console.log(des);  // we can write hardcoded the properties which is not changed

const chai={
    name:"ginger",
    price:250,
    available: true,
    orderchai:function(){
        console.log("chai nhi hai");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{       //isse property ko set kr skhte hai 
                                         // sirf name pr kaam nhi krega iteration kyuki name ko define kiya hai kaam na karna ka
    enumerable:false,
    writable:false,
   // configurable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));



for( const[key,value] of Object.entries(chai) ){
    if(typeof value!=='function'){
    console.log(`${key} : ${value}`)};
}