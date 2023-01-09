let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");
let sec =0;
let min = 0;
let hr =0;
let intervalId;
function stopwatch(){
 intervalId = setInterval(()=>{
          sec = sec === 59 ? 0 : sec + 1;
          min = sec === 59 ? min + 1 : min;
           hr = min === 59 ? hr + 1 : hr;
           timer.innerText=`${hr} :${min} :${sec}`
           start.style.display ="none"
},1000)
}

start.addEventListener("click" ,function(){
stopwatch();
}
);
reset.addEventListener ("click" ,function(){
    sec =0;
    min = 0;
    hr =0;
    timer.innerText=`00:00:00`
    start.style.display="inline-block";
    start.innerText="Start"
 clearInterval(intervalId)
    }
)
stop.addEventListener("click" , function(){  
    start.style.display="inline-block";
    start.innerText="Continue"
     clearInterval(intervalId)
        }
)

