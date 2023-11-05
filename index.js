const nav_bar = document.querySelector(".mobile-navbar");
const nav_header = document.querySelector("#home-container");
const toggleNavbar = () => {
    nav_header.classList.toggle("active")
}
nav_bar.addEventListener("click", () => toggleNavbar());


// animation
let tl = gsap.timeline();

tl.from(".ani, .form-main", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2,
})

tl.from(".container", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
})

tl.from(".content, .content img, .image, .form-details, .form-container", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
})
// gsap.from("#about-container", {
//     scrollTrigger: "#about-container", // start the animation when ".box" enters the viewport (once)
//     y: 100,
//     opacity: 0,
//     stagger: 0.3,
//   });
// gsap.from("feature", {
//     scrollTrigger: ".feature", // start the animation when ".box" enters the viewport (once)
//     scale: 0,
//     opacity: 0,
//     stagger: 0.3
//   });
// gsap.from(".box", {
//     scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//     y: 100,
//     opacity: 0,
//     stagger: 0.5,
//   });
