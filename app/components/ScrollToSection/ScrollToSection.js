export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        // This handles the "Fixed Header" offset we discussed earlier
        const offset = 100; // Adjust for your navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Optional: Manually update the URL without the '#' jump
        // window.history.pushState(null, null, ' ');
    }
};