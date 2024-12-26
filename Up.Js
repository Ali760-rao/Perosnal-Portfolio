function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listener to the icon
document.getElementById('up-icon').addEventListener('click', scrollToTop);