//Check On Local Storage
if(localStorage.getItem("--main-color")) {
  document.documentElement.style.setProperty("--main-color",localStorage.getItem("--main-color"));
  document.documentElement.style.setProperty("--secondry-color",localStorage.getItem("--secondry-color"));
  document.documentElement.style.setProperty("--background-color",localStorage.getItem("--background-color"));
  document.documentElement.style.setProperty("--white-color",localStorage.getItem("--white-color"));
  document.querySelectorAll(".main-page header .icon i").forEach(i=> {
    i.classList.remove("active");
    if(i.dataset.maincolor === localStorage.getItem("--main-color")) {
      i.classList.add("active");
    }
  })

}

// Start Header
//Switch Between Dark Mood And Sun Mood
document.querySelectorAll(".main-page header .icon i").forEach(i=> {
  i.addEventListener("click", function(e) {
e.target.parentElement.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
console.log(e.target.dataset.maincolor)
document.documentElement.style.setProperty("--main-color",e.target.dataset.maincolor);
document.documentElement.style.setProperty("--secondry-color",e.target.dataset.secondrycolor);
document.documentElement.style.setProperty("--background-color",e.target.dataset.backgroundcolor);
document.documentElement.style.setProperty("--white-color",e.target.dataset.whitecolor);
localStorage.setItem("--main-color", e.target.dataset.maincolor);
localStorage.setItem("--secondry-color", e.target.dataset.secondrycolor);
localStorage.setItem("--background-color", e.target.dataset.backgroundcolor);
localStorage.setItem("--white-color", e.target.dataset.whitecolor);
  })
})
// End Header
// Start Sctions
// Select Active Class
document.querySelectorAll(".main-page .sections ul li").forEach((li) => {
  li.addEventListener("click", function (e) {
    console.log(e.target.parentElement);
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// End Sctions
