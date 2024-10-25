let people = [
  { name: "ali", new: true },
  { name: "amir", new: false },
  { name: "hamid", new: true },
  { name: "davod", new: true },
  { name: "saied", new: false },
];

function Container() {
  let tag = document.querySelector("ul");
  tag.innerHTML = "";
  console.log(people);

  people.forEach((element) => {
    if (element.new) {
      tag.innerHTML += `<li>${element.name}<span> new</span></li>`;
    } else {
      tag.innerHTML += `<li>${element.name}</li>`;
    }
  });
}
Container();

let header = document.querySelector("#header");
console.log(header.classList);
console.log(header.classList.toggle("btn-success"));
console.log(header.classList.toggle("btn-success"));
console.log(header.classList.remove("btn"));



header.getAttribute("id");
console.log(header.getAttribute("id"));
header.setAttribute("title", "my title")

let links = document.querySelectorAll('a')

links.forEach(link => {
    let href = link.getAttribute("href")
    link.setAttribute("href", href.replace("http://", "https://"))
    link.setAttribute("data.protocol", "SSL")
    console.log(link.getAttribute("href"));
    link.style.color="green"
    link.dataset.protocol2= 'https'
    link.setAttribute('style',link.getAttribute("style")+ "font-style:italic")
    
})

// let lists = document.querySelectorAll("li")

// lists.forEach(list => {
//   if(list.textContent.includes("success")){
//     list.classList.add("text-success")
//   }
//   if(list.textContent.includes("danger")){
//     list.classList.add("text-danger")
//   }else{
//     list.classList.add("text-primary")
//   }
// })

let ul = document.querySelector("ul")

let lists = Array.from(ul.children)
lists.forEach((list, index) => {
  if(index%2 == 0){

    list.classList.add("text-success")
  }else{
    list.classList.add("text-danger")

  }
})

ul.parentElement.style.background = "#e4e4e4"
ul.previousElementSibling.style.color = 'blue'
ul.nextElementSibling.style.color = 'purple'

let btn = document.querySelector("button")

btn.addEventListener('click', e => {
  e.target.textContent = "Clicked!"
  e.target.classList.add("btn-danger")
  
})

let element = document.createElement("div")

let content = document.querySelector('.content')
content.prepend(element)

window.addEventListener("online", event => {
  element.textContent = "online"
  element.className = "alert"
  element.classList.add('alert-success')
})
window.addEventListener("offline", event => {
  element.textContent = "offline"
  element.className = "alert"
  element.classList.add('alert-danger')
})
