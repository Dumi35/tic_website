// scroll to element with id on page
window.addEventListener('load', () => {
    const hash = window.location.hash;  // Get the hash part of the URL
    if (hash) {
        const elementId = hash.substring(1); // Remove the '#' from the hash
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                block: 'nearest'     // Adjust alignment as needed
            });
        }
    }
});

/* Animate on reaching element */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('*');

        square.forEach(element => {
            const value = element.getAttribute("data-animation")

            if (entry.isIntersecting) {
                element.classList.add(`${value}`);
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            element.classList.remove(`${value}`);
        })
    });
});


const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//do not animate if user's preference is reduced motion
if (!prefersReducedMotion) {
    // Select and observe all elements with the 'why-join-us-section__card' class
    document.querySelectorAll('.why-join-us-section__card').forEach(element => {
        observer.observe(element);
    });
}

const navbarMenu = document.getElementById("navbar__menu")

function toggleNavbarMenu() {
    navbarMenu.classList.toggle('active');
}