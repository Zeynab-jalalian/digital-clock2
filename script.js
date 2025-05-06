function showTime(){
    let myTime=new Date();
    let hour=myTime.getHours();
    let min=myTime.getMinutes();
    let sec=myTime.getSeconds();
    let day=myTime.getDay();
   
    let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekDayConverter=weekdays[day];

    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=min;
    document.getElementById("seconds").textContent=sec;
    document.getElementById("week").textContent=weekDayConverter;
}
setInterval(showTime,1000);
showTime();
