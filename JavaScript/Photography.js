

// get images items from HTML
let landscapeImgs = document.querySelectorAll(".landscape");
let portraitImgs = document.querySelectorAll(".portrait");

// get buttons from HTML
let nextPortraitButton = document.querySelector("#carousel-portrait-next");
let prevPortraitButton = document.querySelector("#carousel-portrait-prev");
let nextLandscapeButton = document.querySelector("#carousel-landscape-next");
let prevLandscapeButton = document.querySelector("#carousel-landscape-prev");

let activeLandscapeIndex = 0;
let activePortraitIndex = 0;

// set first image to active
landscapeImgs[activeLandscapeIndex].classList.remove("hidden");
landscapeImgs[activeLandscapeIndex].classList.add("flex");

portraitImgs[activePortraitIndex].classList.remove("hidden");
portraitImgs[activePortraitIndex].classList.add("flex");

// ##########################################################
// set next and prev buttons
// handle click event on buttons
nextLandscapeButton.onclick = () => {
    landscapeImgs[activeLandscapeIndex].classList.remove("flex");
    landscapeImgs[activeLandscapeIndex].classList.add("hidden");
    
    activeLandscapeIndex++;
    
    if (activeLandscapeIndex > (landscapeImgs.length - 1)) {
        activeLandscapeIndex = 0;
    }

    landscapeImgs[activeLandscapeIndex].classList.add("flex");
    landscapeImgs[activeLandscapeIndex].classList.remove("hidden");
};

prevLandscapeButton.onclick = () => {
    landscapeImgs[activeLandscapeIndex].classList.remove("flex");
    landscapeImgs[activeLandscapeIndex].classList.add("hidden");

    activeLandscapeIndex--;
    if (activeLandscapeIndex < 0) {
        activeLandscapeIndex = landscapeImgs.length - 1;
    }
    landscapeImgs[activeLandscapeIndex].classList.remove("hidden");
    landscapeImgs[activeLandscapeIndex].classList.add("flex");
};

// ##########################################################

nextPortraitButton.onclick = () => {
    portraitImgs[activePortraitIndex].classList.remove("flex");
    portraitImgs[activePortraitIndex].classList.add("hidden");

    activePortraitIndex++;
    if (activePortraitIndex > (portraitImgs.length - 1)) {
        activePortraitIndex = 0;
    }

    portraitImgs[activePortraitIndex].classList.remove("hidden");
    portraitImgs[activePortraitIndex].classList.add("flex");
};

prevPortraitButton.onclick = () => {
    portraitImgs[activePortraitIndex].classList.remove("flex");
    portraitImgs[activePortraitIndex].classList.add("hidden");

    activePortraitIndex--;
    if (activePortraitIndex < 0) {
        activePortraitIndex = portraitImgs.length - 1;
    }

    portraitImgs[activePortraitIndex].classList.remove("hidden");
    portraitImgs[activePortraitIndex].classList.add("flex");
};

// ##########################################################