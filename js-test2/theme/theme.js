"use strict";
let themes = document.querySelector(".themes");
Array.from(themes.children).forEach(theme=>{
      theme.addEventListener("click", e=>{
            let color = e.target.dataset.color
            document.body.style.backgroundColor = color;
      })
})



 