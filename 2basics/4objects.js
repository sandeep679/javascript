
//                   SINGLETOn

//const tinderuser =newobject()     object declaration
 const tinderuser ={}


  tinderuser.id = "123abc"
  tinderuser.name = "samay"
  tinderuser.logged = false

  //console.log(tinderuser);

  const regularuser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"samay",
            lastname:"raina"
        }
    }
  }

  //console.log(regularuser.fullname.userfullname.firstname);


  const obj={
    1:"a",
    2:"b"
  }
  const obj2={
    3:"c",
    4:"f"
  }
  const obj4={
    5:"c",
    6:"f"
  }
  //const obj3 = Object.assign({}, obj,obj2,obj4)    merge object

  //merge object
  const obj3 ={...obj,...obj2,...obj4}  

  //console.log(obj3);



//database value
const user =[{
    id:1,
    email:"yoyo@gmail.com"
},{
    id:3,
    email:"yo@gmail.com"
},{
    id:3,
    email:"y@gmail.com"
},
]

//console.log(user[1].email);

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("logged"));

//             object destrucing

const course ={
  coursename :"js in hindi",
  price :"999",
  courseinstructor :"samay"

}

const {courseinstructor} =course // object destructing
console.log(courseinstructor);   

const {courseinstructor:instructor} =course    // object destructing second ways
console.log(instructor);


