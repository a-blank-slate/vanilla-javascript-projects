var decrease = document.querySelector('.decrease');
var increase = document.querySelector('.increase');
var reset = document.querySelector('.reset');
var valueObj = document.getElementById('value');
var value = valueObj.innerText;

decrease.addEventListener('click',function(){
    value -= 1;
    valueObj.innerText = value;
})
reset.addEventListener('click',function(){
    value=0;
    valueObj.innerText = value;
})
increase.addEventListener('click',function(){
   value = +value+1;
   valueObj.innerText = value;
})