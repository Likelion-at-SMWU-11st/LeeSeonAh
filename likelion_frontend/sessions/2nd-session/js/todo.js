const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

function paintToDo(newTodo){
    const li=document.createElement("li");      //html태그 생성
    const span=document.createElement("span");
    li.appendChild(span);       //부모노드의 저식노드리스트 중 마지막 자식으로 붙임
    span.innerText=newTodo;

    const button=document.createElement("button");
    button.innerHTML="✅";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function deleteToDo(event){
    /*
        이벤트가 발생했을 때 해당 객체를 지정하여
        그 객체의 부모 태그를 지정한다. => 어떤 요소가 클릭되었는지 알 수 있음
    */
    const li=event.target.parentElement;
    li.remove();
}

function handleToDoSubmit(event){
    /* form태그에서의 event는 submit을 발생시키고,
        브라우저의 기본값으로 설정되어 있는 새로고침을 하게 된다.
        우리는 todo-list를 하나 작성한다고 새로고침 되는 겂을 원치않기 때문에
        event.preventDefault()를 통해 기본값을 없애준다.
    */
    event.preventDefault();

    const newTodo=toDoInput.value;
    //값을 입력하고 엔터를 누르면 입력값이 사라지게 하기
    toDoInput.value="";
    //저장한 입력값을 ToDoList에 그리기
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);