"use strict";
let themes = document.querySelector(".themes");
let selection = document.querySelector("#selection")
let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
selection.textContent = `Theme is: ${selectedTheme}`
document.body.className = selectedTheme;



Array.from(themes.children).forEach(theme=>{
      
      theme.addEventListener("click", e=>{            
            let color = e.target.dataset.color           
            document.body.className = color;
            localStorage.setItem("theme", color)
            
      })
})



 