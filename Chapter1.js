//Variables and DataTypes


console.log("Hello! my name is shivam kumar");

name="shivam";
price=99.99;
age=20;
a=null;
y=undefined;
booltype= true;
console.log(price);
console.log(booltype);

//js is dynamically typed - no need to declare datatype
name = 12;
console.log(name);

//= is called assignment operator


//keywords in javascript
// 1)var- can be redeclared and updated.___scope=global
// 2)let- cannnot be redeclared but can be updated. ___ scope=block
// 3)const- cannnot redeclare or update. ___scope=block

//ES6 - EcmaScript6 (2015) "let and const" -called as modern javascript

let fullName = 'me';
console.log(fullName);

//DataTypes
//primitive(7)- Number, String, Boolean, Undefined, null, BigInt, Symbol
//non-primitive(2)- arrays, objects

const student = {
    fullName: 'Ram',
    age: '20',
    cgpa:'8.43'
};
console.log(student["cgpa"]);
console.log(student.age);