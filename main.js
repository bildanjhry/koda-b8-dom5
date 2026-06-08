const watchButton = document.querySelector(".watch-btn")
const watchImage = document.querySelector(".watch-btn > img")

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

watchButton.addEventListener('click', handleWatchPass)