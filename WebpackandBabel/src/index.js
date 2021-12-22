import("./index.css");

let logout = document.getElementById("logo");
let screen = document.getElementById("task");

let submit = document.getElementById("submit-btn");
submit.addEventListener("click", show);

function show() {
  let input = document.getElementById("inputbox").value;
  tasklist(input);
  console.log(input);
}

const tasklist = (data) => {
  let box = document.createElement("div");
  let task = document.createElement("p");
  let done = document.createElement("button");
  let cancel = document.createElement("button");

  task.innerText = data;
  done.innerText = "Done";
  done.classList.add("Done-btn");

  cancel.innerText = "Cancel";
  cancel.classList.add("Cancel-btn");

  box.append(task, done, cancel);
  screen.append(box);
};
