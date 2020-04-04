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