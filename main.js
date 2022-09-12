//btn for scroll

let btnup = document.getElementById('btnup')

window.onscroll = function() {
  if (window.scrollY >= 200) {
    btnup.style.display = "block";
  } else {
    btnup.style.display = "none";
  }
};


btnup.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}




//btn for contact 
function L()
{
  
  let S=event.srcElement;
  location.href="#contact"

}

//end of btn for contact



document.querySelector(".facebook-btn").addEventListener("click", ()=>{
  location.href="https://www.facebook.com/OmHassan.Egypt"
})

document.querySelector(".twitter-btn").addEventListener("click", ()=>{
  location.href="https://twitter.com/OmHassanEgypt"
})

document.querySelector(".instagram-btn").addEventListener("click", ()=>{
  location.href="https://www.instagram.com/OmHassanEgypt/"
})

document.querySelector(".whatsapp-btn").addEventListener("click", ()=>{
  location.href="https://www.instagram.com/OmHassanEgypt/"
})




