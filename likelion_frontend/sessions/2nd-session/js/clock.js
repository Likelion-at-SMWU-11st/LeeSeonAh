// setTimeout(함수, 시간ms): 일정 시간 후 실행
// setTimeout(()=>console.log("2초 후 실행"),2000);

// const timeoutId=setTimeout(()=>console.log("5초 후 실행"),5000);
// clearTimeout(timeoutId);    //아무것도 출력 안 됨 ex) n초 후 로그아웃 실행

//setInterval(함수, 시간ms): 특정 함수를 특정 시간마다 호출
const clock = document.querySelector("h2#clock");

function getClock(){
    clock.innerHTML="지금 시각은 00:00";
    // console.log("getClock() 호출");
    // const date=new Date();
    // const hours=date.getHours();
    // const minutes=date.getMinutes();
    // const seconds=date.getSeconds();

    //두 자리로 나타내고 싶을 때 -> .padStart()
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");    //해당 문자열의 길이가 2가 아니라면 앞에 0을 붙임
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML=`${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock,1000);