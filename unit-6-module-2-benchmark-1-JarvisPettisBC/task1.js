const current = document.querySelectorAll('input');
for(let i = 0; i < current.length; i++){
current[i].addEventListener("click", () => {current[i].parentElement.classList.toggle("checked");})}