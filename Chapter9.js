// Callbacks,Promises & Async Await 
//Suncrouous- the code runs in a particular sequence of instructions
//Asyncronous- some instructions get blocked due to some previous instructions which cause delay in UI 
// NOTE: Async code execution allow to execute next instruction immediately and doesnt block flow

console.log("chapter9");

setTimeout(()=>{
    console.log("time=4Sec");
},4000);
console.log("before 4 sec");

//Callbacks : function arguments to another functions
function multiply(a,b){
    console.log(a*b);
}
function calculator(a,b,multiply){      //multiply as callback
    multiply(a,b);
}
calculator(2,3,multiply);

//Callback hell:(pyramid of Doom) 
/*
Nested callbacks stacked below one another forming a pyramid structure 
this style of programming becomes difficult to understand and manage

*/
//to solve this we have promises
let promise = new Promise((res,rej)=>{
    // console.log("promise");
   res(123);
rej("some error occured");
})
console.log(promise);

//to handle promise we have  .then() & .catch()
// promise.then((res)=<{...})
// promise.catch((err)=<{...})

//promiseChains : more .then gets used

//Async-Await:
// await pause the execution of its surrounding async function untill the promise is settled
async function getAllData(){
    console.log("Data1...");
    await multiply(1,2);
    console.log("data2...");
    await multiply(2,3);
}
getAllData();