
const label = document.querySelector("#label");
const start = document.querySelector("#btn1");
const stop = document.querySelector("#btn2");
const reset = document.querySelector("#btn3");


let count = 0 ;
let intervalid = '';

start.addEventListener('click', ()=>{
    intervalid = setInterval(()=>{
        count = count + 1;
        label.innerHTML = count;
    }, 1000);
});


stop.addEventListener('click', ()=>{
    clearInterval(intervalid);
});

reset.addEventListener('click', ()=>{
   
    count = 0;
    label.innerHTML = '';

})