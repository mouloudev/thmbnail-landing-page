let blackBag = document.querySelector(".thumbnails .image ");
let redBag = document.querySelector("  .thumbnails .image4 ");
let orangeBag = document.querySelector(".thumbnails .image3 ");
let blueBag = document.querySelector(".thumbnails .image2");
let firstImage = document.querySelector(".img img");
let secondImage = document.querySelector(".img2 img");
let thirdImage = document.querySelector(".img3 img");
let forthImage = document.querySelector(".img4 img");
let thumbnails = document.querySelectorAll(".thumbnails  img");
let bullet = document.querySelectorAll(".carousel-bullet a");
let btn = document.querySelector(".full-page-img  button");
let fullPage = document.querySelector(".full-page-img ");
let fullPageImage = document.querySelector(".full-page-img .pic img");
let carouselImage = document.querySelectorAll(".pictures img");
let carousel = document.querySelector(".pictures");
let subContainer = document.querySelector(".sub-container");
let productInfo = document.querySelector(".sub-container div");

// if (carouselImage.length > 2) {

//   window.onscroll = () => {

//     if (carousel.offsetHeight / 2 > window.scrollY) {
//        console.log(carousel.offsetHeight);

//        subContainer.style.height = carousel.offsetHeight / 2 + "px";
//       productInfo.classList.add("fix");
//     } else {
//       subContainer.style.height = carousel.offsetHeight / 2 + "px";
//       productInfo.classList.remove("fix");
//     }
//   };
// }
// adding the border on click
function removeThumnailsActive() {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });
}
thumbnails.forEach((thumbnail) => {
  thumbnail.onclick = (e) => {
    removeThumnailsActive();
    e.target.className = "active";
  };
});
// changing the background color of the carousel bullets onclick
function removeBulletActive() {
  bullet.forEach((dote) => {
    dote.classList.remove("active");
  });
}

bullet.forEach((dote) => {
  dote.onclick = (e) => {
    removeBulletActive();
    e.target.className = "active";
  };
});
// showing the full picture onclick

carouselImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    fullPage.style.display = "block";
    fullPageImage.src = e.target.src;
    console.log(e.target.src);
  });
});
// removing the fullpage image using the echap button or the x button
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    fullPage.style.display = "none";
  }
});

btn.onclick = () => {
  fullPage.style.display = "none";
};
subContainer.style.height = carousel.offsetHeight / 2 + "px";
window.onscroll = () => {
  // fixing the product details while scrolling
  if ((carousel.offsetHeight - 1000) / 2 > window.scrollY) {
    console.log(carousel.offsetHeight);

    subContainer.style.height = carousel.offsetHeight / 2 + "px";
    productInfo.classList.add("fix");
    productInfo.classList.remove("abs");
  } else {
    subContainer.style.height = carousel.offsetHeight / 2 + "px";
    productInfo.classList.remove("fix");
    productInfo.classList.add("abs");
  }

  // changing the active bullet onscroll

  if (firstImage.offsetHeight / 1.5 > window.scrollY) {
    removeBulletActive();
    bullet[0].className = "active";
  } else if (1.5 * firstImage.offsetHeight > window.scrollY) {
    removeBulletActive();
    bullet[1].className = "active";
  } else if (2.5 * firstImage.offsetHeight > window.scrollY) {
    removeBulletActive();
    bullet[2].className = "active";
  } else if (3 * firstImage.offsetHeight > window.scrollY) {
    removeBulletActive();
    bullet[3].className = "active";
  }
};

// changing the big pictures when clicking onthe thumbnail
blackBag.addEventListener("click", () => {
  firstImage.src = "/image/black1.jpg";
  secondImage.src = "/image/black2.jpg";
  thirdImage.src = "/image/black3.jpg";
  forthImage.src = "/image/black4.jpg";
});
blueBag.addEventListener("click", () => {
  firstImage.src = "/image/blue1.jpg";
  secondImage.src = "/image/blue2.jpg";
  thirdImage.src = "/image/blue3.jpg";
  forthImage.src = "/image/blue4.jpg";
});
orangeBag.addEventListener("click", () => {
  firstImage.src = "/image/orange1.jpg";
  secondImage.src = "/image/orange2.jpg";
  thirdImage.src = "/image/orange3.jpg";
  forthImage.src = "/image/orange4.jpg";
});
redBag.addEventListener("click", () => {
  firstImage.src = "/image/red1.jpg";
  secondImage.src = "/image/red2.jpg";
  thirdImage.src = "/image/red3.jpg";
  forthImage.src = "/image/red4.jpg";
});
