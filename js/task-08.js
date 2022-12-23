const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
   e.preventDefault();

    const valueEmail = e.currentTarget.elements.email.value; // отримати ведене значення 
    const valuePassword = e.currentTarget.elements.password.value;
   // console.log(valueEmail);
    //console.log(valuePassword);
    
    if (!(valuePassword && valueEmail)) { /*перевіряю чи поле не пусте */
        return alert("Всі поля повинні бути заповнені");
    } else {
        const data = new FormData(e.currentTarget); //збирає значення форми кі:велю
      //  console.log(data);
        const result = {};
        for (let [key, value] of data.entries()) {
            result[key] = value;
        }
        console.log(result);

        e.currentTarget.reset(result);
    }

}

