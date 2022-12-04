// Grab Restart Button
var restart = document.querySelector("#restartButton")

function clear() {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = '';
        
    }
}

restart.addEventListener('click', clear)

// Grab Box
var box = document.querySelectorAll(".col")

function changeMarker() {
    if (this.textContent === ''){
        this.textContent = 'X'
    } else if (this.textContent === 'X'){
        this.textContent = 'O'
    }else {
        this.textContent = ''
    }
}

for (let x = 0; x < box.length; x++) {
    box[x].addEventListener('click', changeMarker)
}