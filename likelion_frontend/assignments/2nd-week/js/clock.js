const clockDate=document.querySelector("#clock-date");
const clockTime=document.querySelector("#clock-time");

function getClock(){
    
    const nowDate=new Date();
    const year=nowDate.getFullYear();
    const month=nowDate.getMonth()+1;
    const day=nowDate.getDate();
    const hour=String(nowDate.getHours()).padStart(2,"0");
    const minute=String(nowDate.getMinutes()).padStart(2,"0");
    const second=String(nowDate.getSeconds()).padStart(2,"0");

    clockDate.innerText=`현재 시각은 ${year}년 ${month}월 ${day}일`;
    clockTime.innerText=`${hour}:${minute}:${second}`;
    
}

getClock(); //웹사이트 로드되자마자 호출
setInterval(getClock,1000); //새로고침 없이 시간이 변하도록 1초 마다 getClock 호출

//clearInterval 은 어느 타이밍에?






