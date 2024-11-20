//Variable

let active = 0;
let timer = 5000;

let slideShow = document.querySelector(".slideShow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prevues = document.querySelector(".prev")
let next = document.querySelector(".next")

function goNext(){
      active = (active == slides.length-1) ? 0 : (active+1)
      switchClass()
      
      
}

function switchClass(){
      slides.forEach(slide=> slide.classList.remove('active'))
      points.forEach(point=> point.classList.remove('active'))
      slides[active].classList.add('active')
      points[active].classList.add('active')

}

function goPrev(){
      active = (active == 0) ? slides.length-1 : (active-1)
      switchClass()
}

let runSetInterval = setInterval(goNext, timer);

// Add event to points

points.forEach((point, index)=>{
     point.addEventListener('click', e =>{
      active = index;
      switchClass()
     }) 
})

// Add event to prev and next buttons

prevues.addEventListener('click', ()=> goPrev())
next.addEventListener('click', ()=> goNext())

//mouseOver add event

slideShow.addEventListener('mouseover', e =>clearInterval(runSetInterval))

// mouseLeave add event

slideShow.addEventListener('mouseleave', e =>runSetInterval = setInterval(goNext, timer))