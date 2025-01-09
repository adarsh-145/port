document.addEventListener("DOMContentLoaded", function () {
    // Check if screen is mobile size
    if (window.innerWidth <= 768) {
        // Change all fade-right and fade-left to fade-up for mobile
        document.querySelectorAll('[data-aos="fade-right"], [data-aos="fade-left"]')
            .forEach(element => {
                element.setAttribute('data-aos', 'fade-up');
            });
    }

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Dark mode toggle
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
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    };

    // Retrieve mode preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.src = modeToggle.getAttribute('src-dark');
    }

    // Event listener for mode toggle
    modeToggle.addEventListener('click', toggleMode);

    // Reload page on title click
    document.getElementById('reload-link').addEventListener('click', function () {
        window.location.href = './blog.html';
    });
}); 