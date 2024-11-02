const username = " Behuzbek";
const welcome = document.getElementById("main-heading");

welcome.innerText += username === "" ? "Guest" : username;
// console.log(welcome.innerText);
// console.log(welcome.textContent);
// console.log(welcome.innerHTML);

const listItem = document.getElementsByClassName("list-item");
// listItem[0].innerHTML = "Arduino";
// listItem[1].style.color = 'green'; 
// console.log(listItem);

const tagName = document.getElementsByTagName("li");
// console.log(tagName[1].style.backgroundColor = "red" );

// const queryS = document.querySelector("#main-heading");
// const querySA = document.querySelectorAll(".list-item");
// console.log(querySA);

const ul = document.querySelector('.list');
const li = document.createElement('li');
li.textContent = "C#";
ul.append(li);
li.classList.add("list-item");
console.log(ul);

const btn = document.querySelector("#btn-1");

function event1(){
    alert("I love JavScript");
}
btn.addEventListener("click", event1);

// vazifa sammidan 24-29 gacha vidielarni organib kelish va takrorlash