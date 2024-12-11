document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    const logo = document.getElementById('site-logo');

    // Function to switch logo based on the mode
    function switchLogo(isDarkMode) {
        if (isDarkMode) {
            logo.src = logo.getAttribute('data-dark');
        } else {
            logo.src = logo.getAttribute('data-light');
        }
    }

    // Apply the saved theme and logo on page load
    switchLogo(darkModeEnabled);
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-checkbox').checked = true;
    }

    // Toggle dark mode and save the preference in localStorage
    document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
        const isDarkMode = this.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        switchLogo(isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode.toString());
    });
});
