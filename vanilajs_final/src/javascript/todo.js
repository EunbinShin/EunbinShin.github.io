const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = []
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement.parentElement;
    console.log(li)
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id))
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const button_img = document.createElement('img');
    
    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    
    button.className = 'del_btn'
    button_img.src = 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png'
    button.appendChild(button_img);
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
