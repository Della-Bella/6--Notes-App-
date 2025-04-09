
const notesContainer = document.querySelector(".notes-container"); //2
const createBtn = document.querySelector(".btn"); //1
let notes= document.querySelectorAll (".input-box"); //3

//function to create Notes:= <!--<p contenteditable="true" class="input-box"><img src="img/delete.png"> </p><-->

//<p contenteditable="true" class="input-box"><img src="img/delete.png"> </p><--> 
// 1= first create let for <P>
// 2= create variable for <img>
// 3= define input-box class name
// 4= define containteditable = true
// 5= define src image Delete
//6= Create / appendchild = inputbox + image

createBtn.addEventListener("click",()=>{
   let inputBox = document.createElement("p");
   let img = document.createElement("img");
   inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src= "img/delete.png";
    notesContainer.appendChild(inputBox). appendChild(img);
})
