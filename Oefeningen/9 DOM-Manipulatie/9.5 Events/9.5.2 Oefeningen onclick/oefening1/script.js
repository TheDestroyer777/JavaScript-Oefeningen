function changeText() {
    let button = document.querySelector("#subscribe-button");
    if(button.innerHTML == "Subscribe"){
        button.innerHTML = "Subscribed";
        button.style.backgroundColor = "lightgray";
        button.style.color = "black";
        button.style.border = "5px solid lightgray";
    } else {
        button.innerHTML = "Subscribe";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.style.border = "5px solid black";
    }
}