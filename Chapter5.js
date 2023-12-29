//Functions
//it is a block of code that perform specific task that can be invoked whenever needed.
//It is to reduce redundancy

 function myFunction(){
    console.log("Functions in js");   // function has its local varibales having block scope
    myfunc(22+2);
 }
 myFunction(); 

 function myfunc(parameters){
   console.log(parameters);
 }
 myfunc(25);


//Arrow functions
const sum=(a,b)=>{
  return a+b;
}
console.log(sum(1,1));

const mul=(a,b)=>{
  return a*b;
}
console.log(mul(2,3));



