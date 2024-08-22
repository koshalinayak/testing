
var tl = gsap.timeline();

tl.from("p", {
    y: -10,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: "p"
})
tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.2,
    scale: 0.2
})
var main = document.querySelector("#main")
var curser = document.querySelector("#curser")

main.addEventListener("mousemove", function (dets) {
    gsap.to(curser, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})

var video = document.querySelector("video")

video.addEventListener("mouseenter", function () {
    gsap.to(curser, {
        scale: 2
    })
})
video.addEventListener("mouseleave", function () {
    gsap.to(curser, {
        scale: 1
    })
})


const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Reduce";
    }, 0)
    setTimeout(() => {
        text.textContent = "Reuse";
    }, 4000)
    setTimeout(() => {
        text.textContent = "Recycle";
    }, 8000)
}
textLoad();
setInterval(textLoad, 12000);


