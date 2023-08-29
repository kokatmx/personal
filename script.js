// scroll
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// transparent bgcolor
// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.getElementById("header");

//     window.addEventListener("scroll", function () {
//         const scrollPosition = window.scrollY;

//         // Ambil warna latar belakang laman saat ini
//         const backgroundColor = getComputedStyle(document.body).backgroundColor;

//         if (scrollPosition > 0) {
//             header.style.backgroundColor = backgroundColor;
//         } else {
//             header.style.backgroundColor = "transparent";
//         }
//     });
// });

// back to top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// home to top
const homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
