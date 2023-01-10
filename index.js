// Q:1)
// setTimeout(()=>{
//     console.log("Hi")
// },1000)

// Q:2)
// setTimeout(() => {
//     console.log("Hey,")
//     setTimeout(() => {
//       console.log("have");
//       setTimeout(() =>{
//         console.log("a");
//         setTimeout(() => {
//           console.log("nice");
//           setTimeout(() =>{
//             console.log("day");
//           },5000)
//         },4000)
//       },3000)
//     },2000)
//   },1000)

//   Q:3)

// const promise = new Promise(function(res,rej){
//     let result="";
//     if(result == "yes"){
//       res("promise resolved");
//     }
//     else{
//       rej("promise rejected");
//     }
//   })
  
//   promise.then(function(data){
//     console.log(data);
//   }).catch(function(err){
//     console.log("Error",err);
//   })

// Q:4)
// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(2), 1000); 
//   }).then(function (result) { 
//     console.log(result);
//     return result + 2;
//   }).then(function (result) { 
//     console.log(result); 
//     return result + 2;
//   }).then(function (result) {
//     console.log(result); 
//     return result + 2;
//   });
    

//  Q:5)

// function resolved() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolved();
//     console.log(result);
    
//   }
  
//   asyncCall();

//   Q:7)

var a;
console.log(a); //undefined

// console.log(b);
// let b=10; //not defined

// console.log(Math.sqrt(-37)); //NaN




