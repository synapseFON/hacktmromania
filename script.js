let download = document.querySelector(".download-btn");
let row5 = document.querySelector(".lds-default");

download.addEventListener("click", ()=>{
    row5.classList.add("loading");
})