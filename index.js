const menuCont = document.getElementById("menuCont");
const invContainer = document.getElementById("invContainer");
const ADD = document.getElementById("ADD");
const InvItem = document.getElementById("Item");
const Qt = document.getElementById("Qt");
const Price = document.getElementById("Price");
const Engine = document.getElementById("Engine");
const Total = document.getElementById("Total");

// let deleteMe = (e) => {
//   e.parent.remove();
// };

// let getID = (element) => {
//     document.getElementById(element)
//   }

// let consoleIt = (a) =>{
//   comsole.log(a.innerHTML)
// }

let InvObj = () => {
  let idMe = InvItem.value + "Container";

  let makeMe = `<div id="${idMe}">
       <ul class="list-group list-group-horizontal">
           <li class="list-group-item">${InvItem.value}</li>
           <li class="list-group-item">${Qt.value}</li>
           <li class="list-group-item">${Price.value}</li>
           <li class="list-group-item"> ${Engine.value}</li>
           <li class="list-group-item"> ${Engine.value}</li>
           <input class="closeBtn btn-danger" type="button" value="Delete"> 
        </ul>
    </div>`;
  return makeMe;
};

let getCloseBtn = document.getElementsByClassName('closeBtn');

let parentIt = (x)=>{
  x[i].addEventListener('click', function(){
    x[i].parentElement.remove()
  })
  
}

let getAEL = ()=>{
  for (i = 0; i < getCloseBtn.length; i++) {
   parentIt(getCloseBtn) 
  }
}


ADD.addEventListener("click", function () {
  invContainer.innerHTML += InvObj();
});
