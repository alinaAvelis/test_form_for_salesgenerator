import modal from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

  try {
    modal('.click_btn','.pop_up__container', '.close_modal');
  
  } catch(e) {
    // console.log(e)
  } 

  try {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
    
  } catch(e) {
    // console.log(e)
  } 

  try {
    const postData = async (url, data) => {
      let res = await fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: data
      });
  
      return await res.json();
  };

  
    const form = document.querySelector('form');

    let messError = form.querySelector('.mess_err');
    let messSuccess = form.querySelector('.mess_success');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
        
            const formData = new FormData(form);
            console.log(formData);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(json);

            postData('mail.php', formData)
            .then(data => {
                console.log(data);
                messSuccess.textContent = 'Спасибо, мы получили вашу заявку. Свяжемся с вами в рабочее время';
                messError.textContent = '';

            }).catch(() => {
              messSuccess.textContent = ' ';
              messError.textContent = 'Извините, что-то пошло не так. Попробуйте снова.';
            }).finally(() => {
                form.reset();
            });
    }, false);
  } catch(e) {
    console.log(e)
  } 
       
});



