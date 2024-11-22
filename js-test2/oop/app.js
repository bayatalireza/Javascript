let form = document.querySelector("form")
let button = document.querySelector(".btn")
let result = document.querySelector("#app")

async function getYear(year="random"){
     year = year ? year : 1
     let response = await fetch(`http://numbersapi.com/${year}/year`)
     let data = await response.text()
     
     result.textContent = data
     result.className = "alert alert-success"
}
form.addEventListener("submit", e=>{
     e.preventDefault()
     let year = e.target.number.value;
     getYear(year)
})