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

console.log("Hello world!");

const addButton = document.getElementById("add-comment");

addButton.addEventListener("click", function () {
  const uList = document.getElementById("unordered-list");
  const textArea = document.getElementById("text-area");

  let input = textArea.value; // https://www.w3schools.com/jsref/prop_textarea_value.asp
  let newListItem = document.createElement("li");
  newListItem.innerHTML = input;

  uList.appendChild(newListItem);
});
