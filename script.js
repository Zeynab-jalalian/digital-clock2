function showTime(){
    let myTime=new Date();
    let hour=myTime.getHours();
    let min=myTime.getMinutes();
    let sec=myTime.getSeconds();

    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=min;
    document.getElementById("seconds").textContent=sec;
}
setInterval(showTime,1000);
showTime()