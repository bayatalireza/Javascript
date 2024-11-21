let MyClock = document.querySelector('#clock')
function myDate (){
  let date = new Date();
  let seconds = date.getSeconds().toString().padStart(2,0)
  let hours = date.getHours().toString().padStart(2,0)
  let minutes = date.getMinutes().toString().padStart(2,0)
//   let seconds = (`${date.getSeconds() < 9}`) ? (`0${date.getSeconds()}`) : (`${date.getDate()}`)
  MyClock.textContent = `Date: ${hours}: ${minutes}: ${seconds}`
}


setInterval(myDate, 1000)