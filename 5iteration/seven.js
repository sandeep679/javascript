// map
// it iteartie 

const mynum=[1,2,3,4,5,6,7,8,9]

// const newnum =mynum.map((num)=> num+10)
// console.log(newnum);

// const newnum2 =mynum.map((num)=> {return num+10})
// console.log(newnum2);
                   
                     


                    // CHAINING MeTHOD
                     
                     
                     
                     
// const newmuns = mynum.map((num)=>num*10 ).map((num)=>num+1)
// console.log(newmuns);

const newmuns2 = mynum.map((num)=>num*10 ).map((num)=>num+1).filter((num)=>num>=40)
console.log(newmuns2);