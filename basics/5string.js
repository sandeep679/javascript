const name  ="akku"
const repocount =50
// string declaration ------


//console.log(name+repocount+" value");

//new way to write

console.log(`hello my name is ${name} and my reop count is ${repocount}`)
//console.log(`hello my name is ${name.toUpperCase()} and my reop count is ${repocount}`);




//new string declaration
 const gameName =new String('akkusharma')
//  console.log(gameName[0]);
//  console.log(gameName.__proto__); //accessing prototype

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt('2'));
//  console.log(gameName.indexOf('u'));

//  const newString = gameName.substring(0,4) //4 inex is not included
//  console.log(newString);
// const anotherString =gameName.slice(-4,1)
//  console.log(anotherString);

 const newStringOne = "    akku    "
 console.log(newStringOne);
 console.log(newStringOne.trim());


 const url = "https://google%20com"
 console.log(url.replace('%20','.')); // wecan question from replace
 console.log(gameName.split('-'));