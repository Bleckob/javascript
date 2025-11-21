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
const carouselImg = document.getElementById("carouselImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    carouselImg.src = images[index]
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    carouselImg.src = images[index]; 
});

setInterval(() => {
    index = (index + 1) % images.length;
    carouselImg.src = images[index];
}, 5000);