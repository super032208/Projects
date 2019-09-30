let counter = 1;
let ourList = document.getElementById("ourLists");
let ourButton = document.getElementById("ourButton");
let ourHeadline = document.getElementById("our-title");
let listItem = document.getElementById("ourLists").getElementsByTagName("li");

for (i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", activated);
}

function activated() {
  ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
  ourList.innerHTML += " <li> Something New " + counter + " </li>";
  counter++;
}
