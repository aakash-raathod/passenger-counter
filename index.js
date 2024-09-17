//document.getElementById()
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0;

function increment(){
    console.log("The button clicked")
    count+=1;
    countEl.innerText = count
    console.log(count);
}
let saveEl = document.getElementById("save-el")
let preEntry = "Previous Entries"
function save(){
    preEntry += "-" + count
    saveEl.textContent = preEntry
    countEl.textContent = 0
    count =0 
}
