// cookie.js - Simple Cookie Notice

// Check if user already accepted cookies
if (!localStorage.getItem('cookiesAccepted')) {
    // Wait a bit for page to load
    setTimeout(() => {
        // Create the cookie notice div
        const cookieBox = document.createElement('div');
        cookieBox.id = 'cookieNotice';
        cookieBox.innerHTML = `
            <div style="position: fixed; bottom: 20px; left: 20px; right: 20px; background: #2d3748; color: white; padding: 15px 20px; border-radius: 10px; text-align: center; z-index: 9999; font-family: 'Inter', sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.2); max-width: 500px; margin: 0 auto;">
                <p style="margin: 0; margin-bottom: 10px;">
                    🍪 We use cookies to make this tool work better.
                </p>
                <button onclick="acceptCookies()" style="background: #4f46e5; color: white; border: none; padding: 8px 25px; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                    Got it!
                </button>
            </div>
        `;
        document.body.appendChild(cookieBox);
    }, 500);
}

// Function that runs when user clicks "Got it!"
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const notice = document.getElementById('cookieNotice');
    if (notice) {
        notice.remove();
    }
}
