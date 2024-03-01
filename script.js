function addTodo(){
  const title= document.getElementById("title").value
  const description= document.getElementById("description").value
  const container= document.querySelector(".container")
  const todo= document.createElement("div")
  const id=Math.floor(Math.random()*1000000000+1)
  todo.setAttribute("id",id)
  todo.innerHTML=`<h1>${title}</h1><h2>${description}</h2>`
  const button = document.createElement("button")
  button.setAttribute("onClick",`removeTodo(${id})`)
  button.innerHTML="Mark as done"
  todo.appendChild(button)
  container.appendChild(todo)
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  
}
function removeTodo(id){
  document.getElementById(id).remove()
 
  
}
