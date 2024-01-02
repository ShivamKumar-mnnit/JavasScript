//Classes and Objects
const student2={
    fullName:'shivam',
    marks: '8.43',
    printMarks: function(){
        console.log(this.marks);        //this to access property inside object
    }   
}

//js object has special property called prototype  it is by default inside our object
//in js array is object
//prototype has already general properties like array.push etc
//priority: objectMethod > prototypeMethod 



//classes
// it is a program code template for creating objects
// class myClass{
//     constructor(){}
//     function(){}
// }

class TototaCar{

    constructor(){
        console.log("this is constructor");
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("Stop");
    }
    //just like setter 
    setBrand(brand){
        this.brand = brand;
    }
}
let myObj = new TototaCar();    //constructor called
myObj.setBrand("Lambo");
console.log(myObj);

//Inheritance I have learned in c++
//properties can be inherited from one class to another with certain methods
class Parent{
    hello(){
        console.log("HELLO");
    }
    eat(){
        console.log("eat");
    }
}
class Child extends Parent{
    work(){
        console.log("inside child");
        super.eat();
    }
}

let child = new Child();
child.hello();
child.work();
//super(arg)        //calls parent constructor

