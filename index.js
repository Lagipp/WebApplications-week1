/* placeholder
 */

console.log("Hello world!");

/*
if (document.readyState !== "loading") {
  console.log("Document is ready");
  intializeCode();
} else {
  document.addEventListener("DOM content loaded", function () {
    console.log("Document ready after waiting!");
    intializeCode();
  });
}

function intializeCode() {
*/

/*
addButton.addEventListener("click", function () {
  /*
    const textArea = document.getElementById("text-area");

    let newText = document.createElement("p");
    newText.innerHTML = "test";

    textArea.appendChild(newText);



  let list = document.getElementById("unordered-list");
  let listItem = document.createElement("li");
  let userComment = document.getElementById("text-area").value;
  let textNode = document.createTextNode(userComment);
  textNode.appendChild(listItem);
  document.getElementById("unordered-list").appendChild(textNode);
*/

const addButton = document.getElementById("add-comment");

addButton.addEventListener("click", function () {
  const uList = document.getElementById("unordered-list");

  let newListItem = document.createElement("li");
  newListItem.innerHTML = "List item";

  uList.appendChild(newListItem);
});
