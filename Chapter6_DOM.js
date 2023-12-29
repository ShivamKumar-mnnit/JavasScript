//DOM- Document Object Model
document.body.style.background="green";
//This is called as dynamic changes

//DOM Manipulation
// 1)via id:
let heading = document.getElementById("heading");
console.log(heading);
heading.style.color="red";


//2) via class document.getElementsByClassName("heading")
//3)via tag 
let val = document.getElementsByTagName("p");
console.log(val);

//querySelector  --betterway
// can pass id class tag 
let elements = document.querySelector("p");
console.log(elements);
elements.style.color="blue";

//DOM Manipulations
//1)tagname
//2)innerText : return text content of element and all its children
// 3)innerHTML : return the plain text or html contents in elements
// 4)textContent : return Textual content even for hiddent elements 


//tree structure of parent child and siblings --to read 


//Attributes - getAttributes
let div= document.querySelector("div");
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);

// setAttribite --to change attribute of any tag


//style is use to access styles of particular query
div.style.backgroundColor="white";

//insert elements
let newBtn1 = document.createElement("button");
let newBtn2 = document.createElement("button");
newBtn1.innerText="ClickMe1";
newBtn2.innerText="ClickMe2";
// console.log(newBtn);/
div.append(newBtn1);     //inside div but in end 
div.prepend(newBtn2);    //inside div in start

div.after(newBtn1);     //outside end
div.before(newBtn2);       //outside before 

let para = document.querySelector("p");
para.remove();      // to delete element

