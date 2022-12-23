const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onIputChange);

function onIputChange(event) {
    console.log(event.currentTarget.value);
    if (!inputEl.textContent) {
        spanEl.textContent = event.currentTarget.value  || "Anonymous";    
    }   
}
