let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";

let element = document.createElement("div");
element.innerHTML = todo1;
document.body.append(element);
element.innerHTML += " " + todo2;
document.body.append(element);
element.innerHTML += " " + todo3;
document.body.append(element);