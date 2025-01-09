document.getElementById('reload-link').addEventListener('click', function () {
    window.location.href = './project.html';
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if screen is mobile size
    if (window.innerWidth <= 768) {
        // Change all fade-right and fade-left to fade-up for mobile
        document.querySelectorAll('[data-aos="fade-right"], [data-aos="fade-left"]')
            .forEach(element => {
                element.setAttribute('data-aos', 'fade-up');
            });
    }

    // Initialize AOS with custom settings
    AOS.init({
        duration: 1000,    // Duration of animation
        once: true,        // Whether animation should happen only once
        offset: 100,       // Offset (in px) from the original trigger point
        delay: 100,        // Delay animation
        easing: 'ease-in-out-cubic'  // Easing function
    });

    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            modeToggle.src = modeToggle.getAttribute('src-dark');
        } else {
            modeToggle.src = modeToggle.getAttribute('src-light');
        }
        // Store the current mode preference in localStorage
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    };

    // Retrieve mode preference from localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.src = modeToggle.getAttribute('src-dark');
    }

    // Event listener for mode toggle
    modeToggle.addEventListener('click', toggleMode);
});