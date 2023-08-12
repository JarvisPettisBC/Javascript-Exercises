const letterB = document.querySelector(".B")
const letterA = document.querySelector(".A")
const letterC = document.querySelectorAll(".C")

const colorForB = document.querySelector('input[name="B"]');
const colorForA = document.querySelector('input[name="A"]');
const colorForC = document.querySelector('input[name="C"]');

colorForB.addEventListener("input", () => {letterB.style.color = colorForB.value;})
colorForA.addEventListener("input", () => {letterA.style.color = colorForA.value;})

colorForC.addEventListener("input", () => {for (let i = 0; i < letterC.length; i++){
    letterC[i].style.color = colorForC.value;
}})