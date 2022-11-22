

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
   

    paragraph.addEventListener('click', function(){
        paragraph.style.backgroundColor = 'rgb(4, 255, 0)';
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})
// Denne koden gjør at enter aktiverer knappen
var input = document.getElementById("inputField");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {  
    event.preventDefault();
    document.getElementById("addToDo").click();
  }
});


