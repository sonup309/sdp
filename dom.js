var input=document.querySelector('input')
input.value='hello world'
var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.color='green';
var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.backgroundColor='green';
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=1;i<odd.length;i++){
    odd[1].style.backgroundColor='green'
}