let count = 0;

function countUp() {
    count++;
    updateCount(count);
}

function countDown() {
    count--;
    updateCount(count);
}

function reset() {
    count = 0;
    updateCount(count);
}

function updateCount(count) {
    let counter = document.querySelector("#counter");
    counter.innerHTML = count;
}