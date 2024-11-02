let submit = document.querySelector(".form")

console.log(submit);

submit.addEventListener("submit", e=>{
  e.preventDefault()
  let username = document.querySelector("#Username").value
  let password = document.querySelector("#Password").value


  console.log(`Username: ${username}, Password: ${password} `)
  document.querySelector(".form").reset()
})
