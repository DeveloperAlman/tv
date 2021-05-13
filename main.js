document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 100,
    perView: 3
  }).mount();

  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");

  let background = document.querySelector(".background");
  let indices = document.querySelectorAll(".index");

  let bgImgs = ["Indonesia.jpg", "Kerala.jpg", "Bali.jpg", "Thailand.jpg", "CrepeLU-final-41.jpg", "CrepeLU-final-15.jpg", "CrepeLU-final-2.jpg", "crepe-lu-NEW-4.jpg", "crepe-lu-NEW.jpg", "CrepeLU-final-32.jpg"];

  let currentIndex = 0;

  indices.forEach(index => index.classList.remove("active"));
  indices[currentIndex].classList.add("active");

  var myAnimation = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[0]}`,
    image2: `${bgImgs[1]}`,
    displacementImage: "14.jpg",
    hover: false
  });

  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[1]}`,
    image2: `${bgImgs[2]}`,
    displacementImage: "14.jpg",
    hover: false
  });

  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[2]}`,
    image2: `${bgImgs[3]}`,
    displacementImage: "14.jpg",
    hover: false
  });

  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[3]}`,
    image2: `${bgImgs[4]}`,
    displacementImage: "14.jpg",
    hover: false
  });
  var myAnimation5 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[4]}`,
    image2: `${bgImgs[5]}`,
    displacementImage: "14.jpg",
    hover: false
  });
  var myAnimation6 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[5]}`,
    image2: `${bgImgs[6]}`,
    displacementImage: "14.jpg",
    hover: false
  });
  var myAnimation7 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[6]}`,
    image2: `${bgImgs[7]}`,
    displacementImage: "14.jpg",
    hover: false
  });
  var myAnimation8 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[7]}`,
    image2: `${bgImgs[8]}`,
    displacementImage: "14.jpg",
    hover: false
  });
  var myAnimation9 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `${bgImgs[8]}`,
    image2: `${bgImgs[0]}`,
    displacementImage: "14.jpg",
    hover: false
  });

  let distortAnimations = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4,
    myAnimation5,
    myAnimation6,
    myAnimation7,
    myAnimation8,
    myAnimation9
  ];

  function startNextDistortAnimation() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 9;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[prevIndex].next();
    showTextAnimation("next");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1200);
  }

  function startPrevDistortAnimation() {
    currentIndex = currentIndex - 1 < 0 ? 8 : currentIndex - 1;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[currentIndex].next();
    showTextAnimation("prev");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      distortAnimations[currentIndex].previous();
    }, 500);
  }

  nextBtn.addEventListener("click", () => {
    startNextDistortAnimation();
  });

  prevBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
  });

  let titleDisplacement = 0;
  let descriptionDisplacement = 0;

  function showTextAnimation(direction) {
    if (titleDisplacement === 0 && direction === "prev") {
      titleDisplacement = -540;
    } else if (titleDisplacement === -540 && direction === "next") {
      titleDisplacement = 0;
    } else {
      titleDisplacement =
        direction === "next" ?
        titleDisplacement - 180 :
        titleDisplacement + 180;
    }

    if (descriptionDisplacement === 0 && direction === "prev") {
      descriptionDisplacement = -165;
    } else if (descriptionDisplacement === -165 && direction === "next") {
      descriptionDisplacement = 0;
    } else {
      descriptionDisplacement =
        direction === "next" ?
        descriptionDisplacement - 55 :
        descriptionDisplacement + 55;
    }

    let title = document.querySelectorAll("#title h4");
    let description = document.querySelectorAll("#description p");

    title.forEach(title => {
      TweenMax.to(title, 1, {
        top: `${titleDisplacement}px`,
        ease: Strong.easeInOut
      });
    });

    description.forEach((description, index) => {
      let opacity = 0;
      if (index === currentIndex) {
        opacity = 1;
      } else {
        opacity = 0;
      }
      TweenMax.to(description, 1, {
        top: `${descriptionDisplacement}px`,
        ease: Strong.easeInOut,
        opacity: opacity
      });
    })
  }
});
