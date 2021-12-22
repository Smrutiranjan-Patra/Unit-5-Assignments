import("./index.css");
import image from "./logo.png";

let logo = document.getElementById("logo");
logo.src = image;

let screen = document.getElementById("task");

let submit = document.getElementById("submit-btn");
submit.addEventListener("click", show);

function show() {
  let input = document.getElementById("inputbox").value;
  let len = screen.children.length;

  if (len >= 0) {
    screen.style.border = "1px solid brown";
  }
  if (input.length > 0) {
    tasklist(input);
  }
}

const tasklist = (data) => {
  let box = document.createElement("div");
  let task = document.createElement("p");
  let done = document.createElement("button");
  let cancel = document.createElement("button");

  box.classList.add("taskbox");

  task.innerText = data;
  task.classList.add("taskdata");

  done.innerText = "Done";
  done.classList.add("Done-btn");
  done.addEventListener("click", clear);

  cancel.innerText = "Cancel";
  cancel.classList.add("Cancel-btn");
  cancel.addEventListener("click", remove);

  box.append(task, done, cancel);
  screen.append(box);

  function clear() {
    task.classList.remove("taskdata");
    task.classList.add("newtaskdata-style");
  }

  function remove(e) {
    e.target.parentNode.remove(box);
  }
};
