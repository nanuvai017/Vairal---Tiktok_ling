// পপ-আপ নোটিফিকেশন
function showPopup() {
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <p>Join our Telegram channel for more content!</p>
            <a href="https://t.me/+NBHdCMPDwPg5YTY9" target="_blank" id="popup-link">Join Now</a>
            <button id="close-popup">Close</button>
        </div>
    `;
    document.body.appendChild(popup);

    // পপ-আপ বন্ধ করা
    document.getElementById('close-popup').addEventListener('click', () => {
        popup.remove();
    });
}

// ৫ সেকেন্ড পরে পপ-আপ দেখাবে
setTimeout(showPopup, 5000);

// লাইট/ডার্ক মোড টগল
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// থিম টগল বাটন যোগ করা
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Light/Dark Mode';
themeToggleButton.id = 'theme-toggle';
themeToggleButton.addEventListener('click', toggleTheme);
document.body.prepend(themeToggleButton);

// সোশ্যাল মিডিয়া লিংক ক্লিক কাউন্টার
const socialLinks = document.querySelectorAll('footer a');
socialLinks.forEach(link => {
    link.addEventListener('click', () => {
        let clicks = parseInt(localStorage.getItem(link.href)) || 0;
        clicks++;
        localStorage.setItem(link.href, clicks);
        console.log(`${link.href} clicked ${clicks} times.`);
    });
});
