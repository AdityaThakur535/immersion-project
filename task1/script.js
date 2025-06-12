//const head = document.querySelector('#head');
const head = document.getElementById('head')

console.log(head)

head.style.color="red";

head.style.border ="3px solod green";
head.style.backgroundColor="blue";

const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    head.style.backgroundColor="grey";

})