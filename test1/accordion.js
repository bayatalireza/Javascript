let popupBtns = document.querySelectorAll("button.popup-btn");

if (popupBtns) {
  var popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-wrapper";
  document.body.prepend(popupWrapper);
}
popupBtns.forEach((popupBtn) => {
  popupBtn.addEventListener("click", (e) => {
    let popup = popupBtn.nextElementSibling;
    popup.classList.add("show");
    popupWrapper.classList.add("show");
    let popupClosesFunc = (e) => {
      popup.classList.remove("show");
      popupWrapper.classList.remove("show");
    };
  
    let closesPopup = document.querySelectorAll(".popup-close");
    console.log(closesPopup);
    closesPopup.forEach((pClose) => {
      pClose.addEventListener("click", popupClosesFunc);
    });
    popupWrapper.addEventListener("click", popupClosesFunc);
  });

});

let accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  Array.from(accordion.children).forEach((wrapper) => {
    if (wrapper.classList.contains("show")) {
      let div = wrapper.querySelector("div");

      div.style.maxHeight = div.scrollHeight + 30 + "px";
    }

    wrapper.querySelector("span").addEventListener("click", (e) => {
      let span = e.target;
      let wrapper = span.parentElement;
      let div = span.nextElementSibling;

      wrapper.classList.toggle("show");
      if (wrapper.classList.contains("show")) {
        div.style.maxHeight = div.scrollHeight + 30 + "px";
        // console.log(div.scrollHeight + "px");
        // console.log(div.style.maxheight);
      } else {
        div.style.maxHeight = null;
      }

      Array.from(accordion.children).forEach((w) => {
        if (w != wrapper) {
          w.classList.remove("show");
          w.querySelector("div").style.maxheight = null;
        }
      });
    });
  });
});
let scroll = document.querySelector("button.scroll");
let scroll2 = document.querySelector("button.scroll2");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.addEventListener("click", () => {
  if (scroll.classList.contains("show")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 2500) {
    scroll2.classList.add("show");
  } else {
    scroll2.classList.remove("show");
  }
});

scroll2.addEventListener("click", () => {
  if (scroll2.classList.contains("show")) {
    document
      .querySelector("h2#article")
      .scrollIntoView({ top: 0, behavior: "smooth" });
  }
});
