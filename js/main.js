//Check On Local Storage
if (localStorage.getItem("--main-color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("--main-color")
  );
  document.documentElement.style.setProperty(
    "--secondry-color",
    localStorage.getItem("--secondry-color")
  );
  document.documentElement.style.setProperty(
    "--background-color",
    localStorage.getItem("--background-color")
  );
  document.documentElement.style.setProperty(
    "--white-color",
    localStorage.getItem("--white-color")
  );
  document.documentElement.style.setProperty(
    "--text-color",
    localStorage.getItem("--text-color")
  );
  document.querySelectorAll(".settings .icon  i").forEach((i) => {
    i.classList.remove("active");
    if (i.dataset.maincolor === localStorage.getItem("--main-color")) {
      i.classList.add("active");
    }
  });
}

// Start Header

//Toggle Open Settings Class
document
  .querySelector(" .settings .gaer-icon")
  .addEventListener("click", (_) => {
    document.querySelector(".settings").classList.toggle("open");
    document.querySelector(".settings .fa-gear").classList.toggle("fa-spin");
  });

//Switch Between Dark Mood And Sun Mood
document.querySelectorAll(".settings .icon i").forEach((i) => {
  i.addEventListener("click", function (e) {
    e.target.parentElement.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.maincolor
    );
    document.documentElement.style.setProperty(
      "--secondry-color",
      e.target.dataset.secondrycolor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      e.target.dataset.backgroundcolor
    );
    document.documentElement.style.setProperty(
      "--white-color",
      e.target.dataset.whitecolor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      e.target.dataset.textcolor
    );
    localStorage.setItem("--main-color", e.target.dataset.maincolor);
    localStorage.setItem("--secondry-color", e.target.dataset.secondrycolor);
    localStorage.setItem(
      "--background-color",
      e.target.dataset.backgroundcolor
    );
    localStorage.setItem("--white-color", e.target.dataset.whitecolor);
    localStorage.setItem("--text-color", e.target.dataset.textcolor);
  });
});
// End Header
// Start Sctions
// Select Active Class
document.querySelectorAll(".main-page .sections ul li").forEach((li) => {
  li.addEventListener("click", function (e) {
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");
    console.log(e.target.dataset.section);
  });
});

// End Sctions

//CLick On Close
try {
  document.querySelector(".profile .close").addEventListener("click", function() {
    this.parentElement.style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  });
}catch(ex) {
  console.log("it is not the home page")
}
// Fech Employyes Data From Json File
let boxes = document.querySelectorAll(".main-page .search .employees .box");
const names = ["Abdulla Kamal", "Ali Younis", "Abdulrahman Almansoury", "Yousif Ibrahim", "Mustafa Muhammed"]
  boxes.forEach((box, i)=> {
    box.querySelector("h3").innerHTML = names[i];
  box.addEventListener("click", function(e){
    document.querySelector(".profile").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".profile").querySelector(".name").innerHTML =names[i];
  })
  

})

