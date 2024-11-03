let form = document.querySelector(".form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let seePassword = document.querySelector("#see-password");

//user pattern => us
let up = /^[a-zA-Z][\w._]{5,23}$/;

//evaluate password => ep
let ep = 0;

form.username.addEventListener("keyup", (e) => {
  if (e.target.value) {
    username.textContent = e.target.value.toLowerCase();
    
    if (up.test(e.target.value)) {
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
    } else {
      e.target.classList.add("is-invalid");
    }
  } else {
    username.innerHTML = "<i>Please write username</i>";
    console.log();
  }
});
form.password.addEventListener("keyup", (e) => {
  if (e.target.value) {
    password.textContent = "*".repeat(e.target.value.length);
    seePassword.textContent = e.target.value;
    
    ep = 0;
    ep+=/[A-z]/.test(e.target.target) ? 1 : 0;
    ep+=/[a-z]/.test(e.target.value) ? 1 : 0;
    ep+=/[0-9]/.test(e.target.value) ? 1 : 0;
    ep+=/[\w]/.test(e.target.value) ? 1 : 0;
    ep+=e.target.value.length >= 6 ? 1 : 0;

    
    console.log(ep);
    
    if (ep === 5) {
      e.target.classList.add("is-valid");
      e.target.classList.remove("is-invalid");
    } else {
      e.target.classList.add("is-invalid");
    }
  } else {
    password.innerHTML = "<i>Please write username</i>";
    seePassword.innerHTML = "<i>Please write username</i>";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});
