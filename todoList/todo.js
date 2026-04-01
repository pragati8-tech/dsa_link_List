let todos = JSON.parse(localStorage.getItem("todos")) || []

function save(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

function renderList(){
    const list = document.getElementById("todoList")
    list.innerText=""
    todos.forEach((todo,index)=>{

        const li = document.createElement("li")
        li.innerText=todo
        list.appendChild(li)

        const deleteBtn = document.createElement("button")
        deleteBtn.innerText="Delete"
        li.appendChild(deleteBtn)

        deleteBtn.onclick=function(){
            todos.splice(index,1)
            save()
            renderList()
        }
    })
}

function addTodo(){
    const input = document.getElementById("todoInput")
    let text = input.value
    todos.push(text)
    save()
    renderList()
    input.value=""
}
renderList()