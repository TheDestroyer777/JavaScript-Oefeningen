function makeDiv() {
    let input = document.querySelector("input");
    let item = input.value;

    let div = document.createElement("div");
    div.innerHTML = item;

    document.body.append(div);
}