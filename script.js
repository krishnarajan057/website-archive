// 1. Find the button in the HTML using its ID
const themeButton = document.getElementById('theme-toggle');

// 2. Add an event listener to watch for clicks
themeButton.addEventListener('click', () => {
    
    // 3. Toggle the dark-theme class on the body tag
    document.body.classList.toggle('dark-theme');
    
    // 4. Change the button text based on the current theme
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = '☀️ Light Mode';
    } else {
        themeButton.textContent = '🌙 Dark Mode';
    }
});