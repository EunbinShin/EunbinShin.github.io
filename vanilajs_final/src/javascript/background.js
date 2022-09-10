const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.querySelector('#bk-image');
const refreshButton = document.querySelector('#refresh_btn');

backgroundImage.src = `./src/image/${chosenImage}`

function refreshPage(){
    window.location.reload();
}

refreshButton.addEventListener('click', refreshPage)
