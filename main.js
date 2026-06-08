const watchButton = document.querySelector(".watch-btn")
const watchImage = document.querySelector(".watch-btn > img")

function handleWatchPass(){
  const input = document.getElementById("password")
  if(input.type === "password") {
      input.type = "text"
      watchImage.setAttribute("src", "./show.png")
    }
    else {
      input.type = "password"
      watchImage.setAttribute("src", "./hide.png")
    }
}

watchButton.addEventListener('click', handleWatchPass)