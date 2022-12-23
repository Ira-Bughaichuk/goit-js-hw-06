const inputEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", onIputChange);

function onIputChange(e) {
   // console.log(e.target);
    const number = e.target.dataset.length;
    console.log(number);
    if ( e.target.value.length === Number(e.target.dataset.length)) {
        e.target.classList.add("valid");
          e.target.classList.remove("invalid");
    } else {
        e.target.classList.add("invalid");
          e.target.classList.remove("valid");
    }
}