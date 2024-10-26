let  accordions = document.querySelectorAll(".accordion")

accordions.forEach(accordion => {
  Array.from(accordion.children).forEach(wrapper => {
    console.log(wrapper.querySelector("span").textContent);
    
    if(wrapper.classList.contains("show")){
      let div = wrapper.querySelector('div')
      
      div.style.maxHeight= div.scrollHeight+30+"px";
      console.log(div.style.maxheight);
    }
  
  
    wrapper.querySelector("span").addEventListener("click", e => {
      let span = e.target
      let wrapper = span.parentElement
      let div = span.nextElementSibling 
  
      wrapper.classList.toggle("show")
      if(wrapper.classList.contains("show")){
        div.style.maxHeight= div.scrollHeight+30+"px";
        // console.log(div.scrollHeight + "px");
        // console.log(div.style.maxheight);
      }else{
        div.style.maxHeight = null;
      }
      
      Array.from(accordion.children).forEach(w =>{
        if(w != wrapper){
          w.classList.remove("show")
          w.querySelector('div').style.maxheight = null
        }
      })
    })
  })
})