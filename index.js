// document.getElementById("count").innerText = 5

 // innerText is used to replace a text. innerHTML is used to replace or write something new

// let count = 5

// count = count + 1

// console.log(count)



let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count += 1
    countEL.textContent = count
}

// assignment add alert with saved number of count.
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
}

console.log("Let's count passenger at the park")

// new Date = getFullDate
// console.log('Today\'s date:'+ new Date())