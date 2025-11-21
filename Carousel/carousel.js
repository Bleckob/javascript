const images = ["./images/01.jpg",
                "./images/02.jpg",
                "./images/03.jpg",
                "./images/04.jpg",
                "./images/05.jpg",
                "./images/06.jpg",
                "./images/07.jpg",
                "./images/08.jpg",
                "./images/09.jpg",
                "./images/10.jpg",
                "./images/11.jpg",
                "./images/12.jpg",
                "./images/13.jpg",
                "./images/14.jpg",
                "./images/15.jpg",
                "./images/16.jpg",
                "./images/17.jpg",
                "./images/18.png",
                "./images/19.jpg",
                "./images/20.jpg",
];

let index = 0;
const leftImg = document.getElementById("left");
const activeImg = document.getElementById("active");
const rightImg = document.getElementById("right");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateImg(){
    const leftIndex = (index - 1 + images.length) % images.length;
    const rightIndex = (index + 1) % images.length;

    leftImg.src = images[leftIndex];
    activeImg.src = images[index];
    rightImg.src = images[rightIndex];
}

updateImg();

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImg();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateImg();
});

setInterval(() => {
    index = (index + 1) % images.length;
    updateImg();
}, 5000);