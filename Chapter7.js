//Events
// eg: onclick,ondoubleclick etc 
// KeyboardEvent and MouseEvent are mainly used 

let btn1 = document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn clicked");
}


//event object
//eventhandlers
//event listners

// node.addEventListner(event,callbackfunctionOReventhandler)
//read mdn for event handling 

// handling dark and light mode button 
let modebtn = document.querySelector("#mode");

let currmode = "light";


modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{ 
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
})


