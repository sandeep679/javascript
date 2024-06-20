const useremail ="hitesh.ai"
if(useremail){
    console.log("got user email"); //it show got user email but it show dont have user email in ""
}
else{
    console.log("dont have user email");
}

//falsy value ---- false, 0, -0, BigInt 0n,"", null,undefined,NaN

//truth values -- "0",'false," ",[],{},funvtion(){}
 
if(useremail.length===0){
    console.log("array is empty");    //to check array is empty or not
}

const emptyobj ={}
if(Object.keys(emptyobj).length==0){     //to check obj is empty or not
    console.log("object is empty");
}




         //NULLISH Coalescing Operator (??):null undefined

         let val1
         //val1 =5??10    //first value is used in this syntax
         //val1 =null??10    //it give second value because null check safety
         //val1 =undefined??15
        // val1 =null??10??20
            console.log(val1);

            //TERNARY OPERATOR
            //condition ? true:false

            const ice =100
            ice <=80? console.log("less than 80"): console.log("more than 80");