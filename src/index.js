
  // your code here
let taskForm=document.querySelector("form")
let tasks=document.getElementById("tasks")

taskForm.addEventListner("submit",function(event){
  event.preventDefault();
  const newTask=document.getElementById("new-task-description").value
})
