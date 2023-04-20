// Element Selectors
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

// Functions
function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

    var button = document.createElement('button');
    button.appendChild(document.createTextNode("Delete!"));
    li.appendChild(button);
    button.onclick = removeParent;
}
function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

// Event Listeners
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

// ul.addEventListener('click', function(event){
//     event.target.classList.toggle('done');
// });

// GO THRU THIS CODE WHEN YOU CAN !!!! 
// GO THRU THIS CODE WHEN YOU CAN !!!! 
// GO THRU THIS CODE WHEN YOU CAN !!!! 

// document.querySelector('ul').addEventListener('click', function(event){
//     event.target.classList.toggle("done")
// })

// document.querySelector('ul').onclick = function(event){
//     event.target.classList.toggle("done")
// }

ul.onclick = function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return li.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
li[i].appendChild(btn);

btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}