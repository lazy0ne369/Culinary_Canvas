const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
        const body = document.body;

        // Ensure the checkbox and theme are synchronized
        themeToggleCheckbox.addEventListener('change', () => {
            const isDarkMode = themeToggleCheckbox.checked;
            body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        themeToggleCheckbox.checked = savedTheme === 'dark';