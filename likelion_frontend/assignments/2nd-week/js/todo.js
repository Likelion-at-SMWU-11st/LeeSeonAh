const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

function paintToDo(newTodo){

    //투두리스트에 추가된 투두를 보여줌
    // const li=document.createElement("li");
    // li.innerHTML=`${newTodo} `;

    // //삭제 버튼 추가
    // const deleteBtn=document.createElement("button");
    // deleteBtn.innerHTML="delete";
    // deleteBtn.addEventListener("click",deleteToDo);
    // li.appendChild(deleteBtn);

    // toDoList.appendChild(li);

    const p=document.createElement("p");
    const checkbox=document.createElement("input");
    const label=document.createElement("label");
    checkbox.type="checkbox";
    checkbox.name="chk";
    checkbox.value=newTodo;
    label.innerHTML=`${newTodo} `;
    p.appendChild(checkbox);
    p.appendChild(label);

    // //삭제 버튼 추가
    const deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="delete";
    deleteBtn.addEventListener("click",deleteToDo);
    p.appendChild(deleteBtn);

    toDoList.appendChild(p);

}

function addToDo(event){
    event.preventDefault();

    const newTodo=toDoInput.value;
    toDoInput.value="";     //값을 입력하고 엔터를 누르면 입력값이 사라짐
    paintToDo(newTodo);

}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}

//엔터 입력시 submit 방지
function preventEnter(event){
    if(event.keyCode===13){
        event.preventDefault();
    }
}

toDoForm.addEventListener("keydown",preventEnter,true);
toDoForm.addEventListener("submit",addToDo);

