var itemList =document.querySelector('#items');
//parentElement
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);
//parentNode
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode)
//childnodes
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow'
//firstchild
console.log(itemList.firstChild);
//firstelementchild
console.log(itemList.firstElementChild);
//lastchild
console.log(itemList.lastChild);
//lastElemetchild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='hello word'
//nextsibling
console.log(itemList.nextSibling);
//nextelementsibling
console.log(itemList.nextElementSibling);
//previoussibling
console.log(itemList.previousSibling);
//previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green'
//createelement
var newDiv=document.createElement('div')
//addclass
newDiv.className='hello';
//addid
newDiv.id='hello1';
//addattr
newDiv.setAttribute=('title','hello div')
//createTextNode
var newDivText=document.createTextNode('helloworld')
//addtext to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container')
var container=document.querySelector('header h1');
console.log(newDiv);
parentNode=document.getElementById('items')
helloworldlielement=<li>hello world
    parentNode.innerHtml="<li>hello world<li>"+parentNode.innerHtml





