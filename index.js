// scroll to element with id on page
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'nearest',
    });
}

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

