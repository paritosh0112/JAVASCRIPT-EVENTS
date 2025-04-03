let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.target);
    // console.log("button was clicked");
    // let a=25;
    // a++;
    // console.log(a);
// }

// let div=document.querySelector("div");
// div.onmouseover =()=>{
//     console.log("you are inside div");
// }

//event listeners
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked=handler1");
})
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked=handler2");
})
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked=handler3");
})
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked=handler4");
})
