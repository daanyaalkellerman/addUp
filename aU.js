let btnAdd = document.querySelector('[data-add]')
let display = document.getElementById('result')
let array = [34,53,23,'4']
btnAdd.addEventListener('click',function(){
    sumofnum(array)
})
function sumofnum(arr) {
   let sum = 0
   let hasNumbers = false;
   for(let i = 0;i<arr.length;i++){
    if(typeof arr[i] === 'number'){
        sum += arr[i]
        hasNumbers= true;
    }
   }
   if(hasNumbers){
    display.innerText = `sum of numbers: ${sum}`
   } else {
    display.innerText = 'provide only numbers'
   }
}







