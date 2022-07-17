const IMG_NUMBER = 10;
const number = `${Math.floor(Math.random() * IMG_NUMBER)+1}.jpg`;
const bgImg = document.createElement("img");
bgImg.src = `img/${number}`;
bgImg.classList.add("bgImg");
document.body.appendChild(bgImg);