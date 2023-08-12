const fontSize = document.getElementById("fontsizeInput")
const goal = document.getElementById("target")
fontSize.addEventListener("input", () => {let size = fontSize.value
goal.style.fontSize = size + "rem";
if(size < 1){
goal.innerText = "SMALL";}
else if (size == 1){
goal.innerText = "NORMAL";}
else{
    goal.innerText = "BIG"
}
})
