const watchButton = document.querySelector(".watch-btn")
const watchImage = document.querySelector(".watch-btn > img")
const hamburgerMenu = document.querySelector(".hamburger-menu-btn")

function handleWatchPass(){
  const input = document.getElementById("password")
  if(input.type === "password") {
      input.type = "text"
      watchImage.setAttribute("src", "./assets/show.png")
    }
    else {
      input.type = "password"
      watchImage.setAttribute("src", "./assets/hide.png")
    }
}

function handleDropdown() {
    const listMenu = document.querySelector(".hamburger-menu-list")
    listMenu.classList.toggle("show")
}

watchButton.addEventListener('click', handleWatchPass)
hamburgerMenu.addEventListener('click', handleDropdown)