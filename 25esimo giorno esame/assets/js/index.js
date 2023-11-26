const navbar = document.getElementsByClassName('navbar')
const getButton = document.getElementsByClassName('get')
const start = document.getElementsByClassName('start')

// function changeStyle() {
//     start.after(navbar).classList.add("backnav");
//     $("start").after("button").classList.add("backbut");
// }
// changeStyle()

// changeStyle = function () {
//     $("start").after("navbar").addClass("backnav");
//     $("start").after("button").addClass("backbut");
// }

// changeStyle = function () {
//     $("navbar").after("start").addClass("backnav");
//     $("button").after("start").addClass("backbut");
// }

// const options = {
//     root: null,
//     rootMargin: '13px',
//     threshold: 0.5
// };
// 
// const callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Navbar is intersecting with the button
//             navbar.style.backgroundColor = 'white';
//         } else {
//             // Navbar is not intersecting with the button
//             navbar.style.backgroundColor = 'yellow';
//         }
//     });
//     var observer = new IntersectionObserver(callback, options);
//     observer.observe(getButton);
// };