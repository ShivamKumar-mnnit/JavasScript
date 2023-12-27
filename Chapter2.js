//Operators and conditional statements


// Arithmatic Operators
/*
1)Arithmatic:    + - / *
2)Modulus: %  --gives reminder
3)Exponentiation: **  --gives power
4)Urinary operator (increment and decrement): ++ -- 
*/ 

let a = 5;
let b = 2;
console.log("2 to the power of 5 : ",5**2);
console.log(a++);
console.log(++a);

/*
5)Assignment Operators
        =   +=   -=   *=  %=

6)Comparison operators: ==(equalto)  ===(equalto and type)   !=(notequalto)    !==(notequalto and type)

*/

console.log("a==b" , a==b);
console.log("a===b" , a===b);

let c = 5;
let d = "5";
console.log("c==d",c==d); //javascript convert stringto number and then compare
console.log("c===d",c===d); // also check datatype

/*
7)comparison operator: < > <= >= 
8)logical operator:  &&   ||   !
*/
console.log("a&&b",a&&b);
console.log("a||b",a||b);
console.log("!a : ",!a);


//conditional statements : if, else if, else
//Ternary Operator: condition?true:false
let k =19;
let kk= k>18?"adult":"notAdult";
console.log(kk);

//switch case can be read directly by MDMDocs


//Alert and prompt;
// alert("Hello");
let name = prompt("Hello Enter your name");
console.log(name);

