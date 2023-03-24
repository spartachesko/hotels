let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
    colorWrong: '#FF5C00',
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         email: {
           required: "Вы не ввели email"
         },
         name: "Вы не ввели имя",
         phone: {
           required: "Вы не ввели телефон",
           function: "Недостаточное количество символов"
         }
       }
    });