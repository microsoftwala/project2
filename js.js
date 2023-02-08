const hours = document.getElementById("hour")
const min = document.getElementById("minute")
const sec = document.getElementById("second")
const am = document.getElementById("ampm")

function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampms = "AM"
    if(h>12){
        h =  h-12
        ampms = "PM"
    }
    if(h<10)
    {
        h = "0"+h;
    }
    if(m<10)
    {
        m = "0"+m;
    }
    if(s<10)
    {
        s = "0"+s;
    }
    sec.innerText = s
    min.innerText = m
    hours.innerText = h
    am.innerText = ampms
    setTimeout(()=>{
        clock()
     },1000)
}

clock()