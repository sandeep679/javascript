// for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 0; i < 10; i++) {             // nested for loops
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 10; j++) {
//         const element = j;
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
//     }
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log("outer loop", i );
//     for (let j = 0; j < 10; j++) {
//         const element = j;
//         //console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i+'*'+ j + '=' + i*j);
        
//     }
    
// }


                       // Array with for loop

// let myarray =["flash", "batman","superman"]
// console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

                     /// break and continue

                    //  for (let index = 1; index < 20; index++) {
                    //     if(index==5){
                    //         console.log("detected  5");
                    //         break
                    //     }
                    //    console.log(`value of i is ${index}`);
                    //  }


                     for (let index = 1; index < 20; index++) {
                        if(index==5){
                            console.log("detected  5");
                            continue
                        }
                       console.log(`value of i is ${index}`);
                     }