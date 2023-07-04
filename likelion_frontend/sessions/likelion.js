// console.log(alert("Hi!"));

// function sayHello(){
//     console.log("Hello!");
// }
// sayHello();

//Eventhandler 실습
// querySelector로 요소 선택해서 변수 만들기
// const content=document.querySelector("div.content h1");

// function handleContentClick(){
//     content.style.color="green";
// }

// content.addEventListener("click", handleContentClick);

//greeting실습
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden"); 
    //요소에 "hidden" 이라는 이름의 class를 추가하기
    //form id="login-form" -> form class="hidden" id="login-form"
    const userName=loginInput.value;
    greeting.innerText=`Hello ${userName}!`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",loginSubmit);