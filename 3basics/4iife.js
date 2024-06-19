//Immediately Invoked Function Expressions(IIFE)


// function chai(){
//     console.log(`DB connected`);
// }
// chai()


(function chai(){      //IIFE use backets before function
    console.log(`DB connected`);  // this is named IIFE
})();   // semicolon helps to end line

((name)=>{                        //This is unnamed IIFe
    console.log(`DBtwo connected ${name}`);
})("samay");