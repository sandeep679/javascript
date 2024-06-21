    

// const coding =["js","rb","py","java","cpp"]

//    coding.forEach((item)=>{
//     console.log(item);
//   })

//   const values =coding.forEach((item)=>{
//     console.log(item);
//     return item                       it is not working
// })
//   console.log(values);
  
                    //FILTER 

                    
// const mynum =[1,2,3,4,5,6,7,8,9,10]

// const newnum =mynum.filter((num)=> num>4 )
// console.log(newnum);

// const newnum =mynum.filter((num)=> {
//       return  num>4                               //retrun must to give output
// }
//  )
// console.log(newnum);

// const nums=[]
// mynum.forEach((num)=>{
//     if(num > 4){
//         nums.push(num)
//     }
// })
// console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks = books.filter((bk)=>bk.genre=='History')
//   console.log(userbooks);

//   const userbooks2 =books.filter((bk)=>bk.publish >= 2000)
//   console.log(userbooks2);

//   const userbooks3 =books.filter((bk)=>{ return bk.publish >= 2000})
//   console.log(userbooks3);

const userbooks4 =books.filter((bk)=>{ 
    return bk.publish >= 1995 && bk.genre=="History"
})
  console.log(userbooks4);