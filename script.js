const arrSkills=["FrontEnd Developer","Sportsman","Web Designer","React Developer"];
const arrLength=arrSkills.length;
let index=0;
let charindex=0;

setInterval( function(){
    charindex++;
document.querySelector(".I-am-a").innerHTML=`${arrSkills[index].slice(0,charindex)}`;
if(charindex===arrSkills[index].length){
index++;
charindex=0;
}
if(index===arrLength){
    index=0;
}
},300)
const logo=document.querySelector(".logo");
const burger=document.querySelector(".burger");
const menu = document.querySelector("nav ul");
const toggleMenu = () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    burger.style.display = "none";

};
const toggleBurger = () => {
    menu.style.display = "none";
    burger.style.display = "block";
}
document.querySelector(".burger").addEventListener("click", toggleMenu);
logo.addEventListener("click",toggleBurger);


