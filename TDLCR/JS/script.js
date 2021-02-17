//As a user, I want to add a new task on the to do list
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var displaytxt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(displaytxt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// As a user, I want to display the task in an unorder list. Create a "close" button and append it to each list item
var myNlist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNlist.length; i++) {
  var span = document.createElement("SPAN");
  var displaytxt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(displaytxt);
  myNlist[i].appendChild(span);
}

//As a user, I want to delete task in the todo list. Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(el) {
  if (el.target.tagName === 'LI') {
    el.target.classList.toggle('checked');
  }
}, false);