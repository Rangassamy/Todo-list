//---------
// Partie 1
//---------

// Créer un form pour taper les todos

//Ajouter sur le dom ce qui est tapé dans l'input à la validation du form

//monInput.value

// Supprimer un todo lorsque l'on click dessus (.remove())

//---------
// Partie 2
//---------

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos

//--------------------------------------------------//
//--------------------------------------------------//

const form = document.querySelector("form");

// Storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos());

//add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
