const header = document.getElementsByClassName("header")[0];
const headerBtn = header.getElementsByClassName("mobmenu")[0];
const headWrap = header.getElementsByClassName("col-wrap")[0];
const navLink = header.querySelectorAll("li");
navLink.forEach((item) =>{
  item.addEventListener("click", function(e) {
    if(e.target.innerText != undefined){
      headWrap.classList.remove("active");
      document.body.classList.remove("mobilemenu");
    }
})})
headerBtn.addEventListener("click", () => {
  headWrap.classList.toggle("active");
  document.body.classList.toggle("mobilemenu");
});
window.onscroll = function () {
  if (document.documentElement.scrollTop > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};