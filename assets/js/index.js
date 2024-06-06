// Ejercicio 1
const img = document.querySelector("#imagen");

img.addEventListener("click", () => {
  img.classList.toggle("borde");
});

// Ejercicio 2

const btn2 = document.querySelector("#btne2");

btn2.addEventListener("click", () => {
  const num1a = document.querySelector("#num1");
  const num2a = document.querySelector("#num2");
  const num3a = document.querySelector("#num3");
  const numTotal = Number(num1a.value) + Number(num2a.value) + Number(num3a.value);
  validarstickers = document.querySelector('#validarstickers')

  if (numTotal < 11) {
    validarstickers.innerHTML = "Llevas " + numTotal + " stickers"
  } else {
    validarstickers.innerHTML = "Llevas demasiados stickers "
  }
});

// Ejercicio 3

const passbtn = document.querySelector("#passbtn")
passp = document.querySelector('#passp') 

passbtn.addEventListener("click", () => {
  const pass1 = document.querySelector('#pass1')
  const pass2 = document.querySelector('#pass2')
  const pass3 = document.querySelector('#pass3')


  if (pass1.value == 9 && pass2.value == 1 && pass3.value == 1) {
    passp.innerHTML = "Password 1 es correcta"
  } else if (pass1.value == 7 && pass2.value == 1 && pass3.value == 4) {
    passp.innerHTML = "Password 2 es correcta"
  } else {
    passp.innerHTML = "Password incorrecto"
  }
})