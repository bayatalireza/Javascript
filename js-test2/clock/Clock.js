let Clock = document.querySelector('#clock')
let DATE = document.querySelector('#date')
function myClock(){
  let clock = new Date();
  let seconds = clock.getSeconds().toString().padStart(2,0)
  let hours = clock.getHours().toString().padStart(2,0)
  let minutes = clock.getMinutes().toString().padStart(2,0)
//   let seconds = (`${clock.getSeconds() < 9}`) ? (`0${date.getSeconds()}`) : (`${date.getDate()}`)
  Clock.textContent =  `clock: ${hours}: ${minutes}: ${seconds}`
}
myClock()

function myDate(){
  let MyDate = new Date() 
  let years = MyDate.getFullYear() 
  let months = MyDate.getMonth()
  console.log(months);
  
  let days = MyDate.getDay()
  console.log(days);
  
//   DATE.textContent = gregorian_to_jalali(years,months,days);
  DATE.textContent = `${years},${months},${days}`
}

setInterval(myClock, 1000)
setInterval(myDate, 5000)