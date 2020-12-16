
  // your code here
let taskForm=document.querySelector("form")
let submit=document.getElementById("submit")

taskForm.addEventListner("submit",function(event){
  event.preventDefault();
  const newTask=document.getElementById("new-task-description").value
})
