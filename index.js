/* placeholder


*/

const addButton = document.getElementById("add-comment");

/*
addButton.addEventListener("click", function () {
  const unorderedList = document.getElementById("unordered-list");

  let newListItem = document.createElement("p");
  newListItem.innerHTML = "test";

  unorderedList.appendChild(newListItem);
});
*/

addButton.addEventListener("click", function () {
  const textArea = document.getElementById("text-area");

  let newText = document.createElement("p");
  newText.innerHTML = "test";

  textArea.appendChild(newText);
});

/*
const addButton = document.getElementById("add-comment");

addButton.addEventListener("click", function () {
  const unorderedList = document.getElementById("unordered-list");

  let newListItem = document.createElement("p");
  newListItem.innerHTML = "test";

  unorderedList.appendChild(newListItem);
});
*/
