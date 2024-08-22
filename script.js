// Initialize GSAP timeline
var tl = gsap.timeline();

// Animate paragraphs
tl.from("p", {
    y: -10,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: "p"
});

// Animate h1 elements (not present in the current HTML)
tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.2,
    scale: 0.2
});

// Custom cursor animation
var main = document.querySelector("#main");
var curser = document.querySelector("#curser");

main.addEventListener("mousemove", function (dets) {
    gsap.to(curser, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    });
});

// Video hover effect
var video = document.querySelector("video");

if (video) {
    video.addEventListener("mouseenter", function () {
        gsap.to(curser, {
            scale: 2
        });
    });
    video.addEventListener("mouseleave", function () {
        gsap.to(curser, {
            scale: 1
        });
    });
}

// Text rotation animation
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






//for nav bar 
document.querySelectorAll('.nav2 a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav2 a').forEach(item => {
            item.classList.remove('text-green-400');
            item.querySelector('.dot').classList.replace('bg-green-400', 'bg-transparent');
        });
        this.classList.add('text-green-400');
        this.querySelector('.dot').classList.replace('bg-transparent', 'bg-green-400');
    });
});

// Profile picture functionality
const profileButton = document.getElementById('profile-button');
const profileOptions = document.getElementById('profile-options');
const profileContainer = document.getElementById('profile-container');

profileButton.addEventListener('click', () => {
    profileOptions.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!profileContainer.contains(event.target)) {
        profileOptions.classList.add('hidden');
    }
});

// New function for responsiveness
function handleResponsiveness() {
    const topNav = document.querySelector('.nav2');
    const bottomNav = document.getElementById('bottom-nav');
    const profileContainer = document.getElementById('profile-container');
    const profileIcon = document.getElementById('profile-icon');



    if (window.innerWidth < 768) {
        topNav.classList.add('hidden');
        bottomNav.classList.remove('hidden');
        profileContainer.classList.add('hidden');
        profileIcon.classList.remove('hidden');
    } else {
        topNav.classList.remove('hidden');
        bottomNav.classList.add('hidden');
        profileContainer.classList.remove('hidden');
        profileIcon.classList.add('hidden');
    }
}

// function load and resize
window.addEventListener('load', handleResponsiveness);
window.addEventListener('resize', handleResponsiveness);

