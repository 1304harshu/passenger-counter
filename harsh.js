let saveOne = document.getElementById("save-el")
let newCount = document.getElementById("count")
let count = 0

console.log(saveOne)

function increment(){
    count += 1
    newCount.textContent = count
}
function decrement(){
    count -= 1
    newCount.textContent = count
}
function save(){
   let countStr = count + " - " 
   saveOne.textContent += countStr
   console.log(count)
   newCount.textContent=0
   count=0
 }