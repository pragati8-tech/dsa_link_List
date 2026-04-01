let todos = JSON.parse(localStorage.getItem("todo")) || []

function save(){
    localStorage.setItem("todo",JSON.stringify(todos))
}

function renderList(){
    const list = document.getElementById("todoList")
    list.innerText =""
    todos.forEach((todo,index)=>{
        let li= document.createElement("li")
        li.innerText=todo
        list.appendChild(li)
        let deleteBtn = document.createElement("button")
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
            let input=document.getElementById("todoInput")
            let text = input.value.trim()
            if(text===""){
                alert("enter Todos")
            }
            todos.push(text)
            save()
            renderList()
            input.value=""
        }
        renderList()