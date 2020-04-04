/*const myHeading = document.querySelector('h1');
myHeading.textContent='Hello world!';*/
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
/*let myimg = document.querySelector('img');
myimg.onclick = function() {
alert('Yes! keep moving the mouse')
};*/
let myImage= document.querySelector('img');
myImage.onclick=function(){
	let mySrc= myImage.getAttribute('src');
	if(mySrc==='images/aish.jfif'){
		myImage.setAttribute('src','images/aish2.jfif');
	} else{
		myImage.setAttribute('src','images/aish.jfif')
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')
function setUserName(){
	let myName = prompt('Plese enter your name.');
	if (!myName||myName=== null) {
		setUserName();
	}
	else{
	localStorage.setItem('name', myName);
	myHeading.textContent= 'Hey '+ myName + '! What you need to know about 9 minutes @ 9:00 PM';
}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else{
	let storedName= localStorage.getItem('name');
	myHeading.textContent= 'Hey '+ myName + '! What you need to know about 9 minutes @ 9:00 PM';
}
myButton.onclick = function(){
	setUserName();
}
/* for adding list at the end of the page
var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }

 */
