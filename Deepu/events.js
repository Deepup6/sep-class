function popup(){
    alert("you have clicked me!!")
}

var btn=document.getElementById("myBtn");
btn.addEventListener("click",function(){
    btn.textContent="changed"
    
})
var id1=document.getElementById("id1")
function changeColor(){
id1.style.backgroundColor="green"
}

function hide(){
    id1.style.backgroundColor="white"
}