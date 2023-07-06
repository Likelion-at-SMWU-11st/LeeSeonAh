const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

const chks = document.getElementsByName("chk");

function paintToDo(newTodo) {
    //투두리스트에 추가된 투두를 보여줌

    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'chk');
    checkbox.setAttribute('value', newTodo);

    span.innerText = ` ${newTodo} `;
    p.appendChild(checkbox);
    p.appendChild(span);

    // 삭제 버튼 추가
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    deleteBtn.addEventListener("click", deleteToDo);
    p.appendChild(deleteBtn);

    toDoList.appendChild(p);


    //checked event 발생시
    checkbox.addEventListener('change', isChecked);


}

function isChecked(event){
    const value=event.target.checked;

    if (value == true) {
        //체크됐을때
        const li = document.createElement("li");
        li.innerText=event.target.value;      

        completedList.appendChild(li);

        event.target.parentElement.remove();
    }

    else {
        //체크가 해제됐을 때
        for(let i=0; i<completedList.childElementCount; i++){
            if(completedList.childNodes[i].innerText==event.target.value){
                completedList.childNodes[i].remove();
            }
        }
    }
}

function addToDo(event) {
    //투두리스트 추가

    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";     //값을 입력하고 엔터를 누르면 입력값이 사라짐
    paintToDo(newTodo);

}

function deleteToDo(event) {
    //투두리스트 삭제

    const li = event.target.parentElement;
    li.remove();
}

function preventEnter(event) {
    //엔터 입력시 submit 방지

    if (event.keyCode === 13) {
        event.preventDefault();
    }
}



// 이벤트 핸들링
toDoForm.addEventListener("keydown", preventEnter, true);
toDoForm.addEventListener("submit", addToDo);

