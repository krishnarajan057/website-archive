// --- 1. Dark Mode Logic ---
const themeButton = document.getElementById('theme-toggle');
if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeButton.textContent = document.body.classList.contains('dark-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

// --- 2. Typography Logic ---
const fontSelector = document.getElementById('font-selector');
if (fontSelector) {
    fontSelector.addEventListener('change', (e) => {
        // Changes the font of the entire body based on the dropdown selection
        document.body.style.fontFamily = e.target.value;
    });
}

// --- 3. Text Size Logic ---
const btnIncrease = document.getElementById('text-increase');
const btnDecrease = document.getElementById('text-decrease');
let currentSize = 1.15; // The default size in rem

if (btnIncrease && btnDecrease) {
    btnIncrease.addEventListener('click', () => {
        if (currentSize < 2.0) { // Limit how big it can get
            currentSize += 0.1;
            document.documentElement.style.setProperty('--base-font-size', currentSize + 'rem');
            updateContentSize();
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentSize > 0.8) { // Limit how small it can get
            currentSize -= 0.1;
            updateContentSize();
        }
    });
}

function updateContentSize() {
    // Finds all paragraphs inside the main content and updates their size
    const paragraphs = document.querySelectorAll('.content p');
    paragraphs.forEach(p => {
        p.style.fontSize = currentSize + 'rem';
    });
}

// --- 4. Focus Mode Logic ---
const focusButton = document.getElementById('focus-toggle');
if (focusButton) {
    focusButton.addEventListener('click', () => {
        document.body.classList.toggle('focus-active');
        
        if (document.body.classList.contains('focus-active')) {
            focusButton.textContent = '📖 Disable Focus';
            focusButton.style.backgroundColor = 'var(--accent-color)';
            focusButton.style.color = 'var(--bg-color)';
        } else {
            focusButton.textContent = '💡 Focus Mode';
            focusButton.style.backgroundColor = 'transparent';
            focusButton.style.color = 'var(--text-color)';
        }
    });
}