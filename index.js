/* placeholder


*/

const addButton = document.getElementById("add-comment");

addButton.addEventListener("click", function () {
  const unorderedList = document.getElementById("unordered-list");

  let newListItem = document.createElement("p");
  newListItem.innerHTML = "test";

  unorderedList.appendChild(newListItem);
});
