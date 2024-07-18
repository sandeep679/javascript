// let myName =" Samay"
// let mychannel ="comedian"

// console.log(myName.trueLength);

let myheros =["spiderman","thor"]  //array

let heroPower ={                   // object
    thor:"hammer",
    spiderman :"sling",
   getspidermanpower: function(){
  console.log(`spidy power is ${this.spiderman}`);
   }  
}


Object.prototype.Samay = function(){                 //create of   function in prototype
    console.log(`Samay presnt in all objects`);
}
Array.prototype.heySamay =function(){             //create array in prototype
    console.log(`Samay says hello`);
}


//heroPower.Samay()         // we access higher hiearchy in js 
myheros.Samay()                // it access object prototype because object is high hiearchy
// myheros.heySamay()           // it have access to array  because it decalre in  array 
//heroPower.heySamay()         // it is not accessible because it declare in low hiearchy



                         


                                 //Inheritance 


const user={
    name:"Honey"
}
const  teacher ={
    makevideo:true
}
const support={
    isavailable :false
}

const TA ={
    assignment :'js assignment',
    fullTime:true,
    __proto__:support
}

teacher.__proto__ =user         // this is old acessing method 
 // modern syntax
 Object.setPrototypeOf(support,teacher) // support access property of teacher






 let username ="SAMAY      "
 String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is:${this.trim().length}`);
 }
 username.trueLength()
 "icetea".trueLength()