const timmeypic =document.querySelector(".timmeypic")
const timmy =document.querySelector(".timmy")
let count = 0;

timmeypic.addEventListener('mousedown', () =>{
count++
timmy.innerHTML="clicks;"+count
timmeypic.style.transform = "scale(1.1)";
});

timmeypic.addEventListener('mouseup', () =>{

timmeypic.style.transform = "scale(1)";
});



