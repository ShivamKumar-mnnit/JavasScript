//Loops and Strings

console.log("LOOPS");
//for loop
for(let i = 0;i<5;i++){     //scope of i for let is block
    console.log(i+1);
}
//if we use var in place of let the scope will global we can access
for(var kkk=0;kkk<2;kkk++){
    console.log(kkk);
}
console.log(kkk);

//While loop
while(kkk<5){
    console.log(kkk,'from while');
    kkk++;
}

//do while loop - atleast once run then check condition


//for-of loop is used to iterate words of string or array
let str="Shivam kk";
for(let val of str){
    console.log(val);
} 

//for-in loop work on objects
let studentaaa={
    name: "Rahul",
    age: 24,
    cgpa: 8.43,
    isPass: true
}
for(let i in studentaaa){
    console.log(i,"=",studentaaa[i]);
}


//string: string is sequence of characters used to represent text
//Template Literals
let sentence = `This is a template literal ${1+2+3}`;         //this is called as string interpolation
console.log(sentence); 

// escape character: \n  \t  
//note: escape character counted as single character 
let strnew = "Shivam\nKumar";
console.log(strnew.length)         //12

//String Methods/functions
//1)strnew.toUpperCase()
//2)strnew.toLowerCase()
//3)strnew.trim()       // to remove white spaces from start and end only
//4)strnew.charAt(2);
console.log(strnew.toUpperCase());
console.log(strnew.charAt(2));   //i
