function showTime(){
    let myTime=new Date();
    let hour=myTime.getHours();
    let min=myTime.getMinutes();
    let sec=myTime.getSeconds();
    let day=myTime.getDay();
    let month=myTime.getMonth();
   
    let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekDayConverter=weekdays[day];

    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let monthsConverter=months[month];

    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=min;
    document.getElementById("seconds").textContent=sec;
    document.getElementById("week").textContent=weekDayConverter;
    document.getElementById("month").textContent=monthsConverter;
    document.getElementById("day").textContent=myTime.getDate();
}
setInterval(showTime,1000);
showTime();
