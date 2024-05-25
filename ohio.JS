const timmeypic =document.querySelector(".timmeypic")
const timmy =document.querySelector(".timmy")
let count = 0;

timmeypic.addEventListener('click', () =>{
count++
timmy.innerHTML="clicks;"+count
});



