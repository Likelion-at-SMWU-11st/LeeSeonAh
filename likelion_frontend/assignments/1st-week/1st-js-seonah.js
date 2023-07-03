const nameForm=document.querySelector("#name-form");
const nameInput=document.querySelector("#name-form input");
const greeting=document.querySelector("#greeting");
const greetingText=document.querySelector("#greeting span");

function nameSubmit(event){
    event.preventDefault();
    nameForm.classList.add("hidden");

    const userName=nameInput.value;
    greetingText.innerText=`${userName}`;

    greeting.classList.remove("hidden");

}

nameForm.addEventListener("submit",nameSubmit);

