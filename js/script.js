const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
    const scrollPosition = window.scrollY + 200;

    let currentSection = "home";

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
