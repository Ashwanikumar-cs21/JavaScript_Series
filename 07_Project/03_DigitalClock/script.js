const clock = document.getElementById('clock');
const date = document.getElementById('date');


setInterval(function(){
    let time  = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();

} , 1000);

let today = new Date();
date.innerHTML = today.toLocaleDateString();