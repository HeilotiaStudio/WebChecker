// cookie.js - Simple Cookie Notice for beginners

// Check if user already accepted cookies
if (!localStorage.getItem('cookiesAccepted')) {
    // Create the cookie notice div
    const cookieBox = document.createElement('div');
    cookieBox.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #2d3748; color: white; padding: 15px; text-align: center; z-index: 9999; font-family: Arial, sans-serif; box-shadow: 0 -2px 10px rgba(0,0,0,0.2);">
            <p style="margin: 0; display: inline-block; margin-right: 20px;">
                🍪 This website uses cookies to improve your experience.
            </p>
            <button onclick="acceptCookies()" style="background: #4f46e5; color: white; border: none; padding: 8px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                Got it!
            </button>
        </div>
    `;
    document.body.appendChild(cookieBox);
}

// Function that runs when user clicks "Got it!"
function acceptCookies() {
    // Save to localStorage so popup doesn't show again
    localStorage.setItem('cookiesAccepted', 'true');
    
    // Remove the cookie notice from page
    const notice = document.querySelector('div[style*="position: fixed"]');
    if (notice) {
        notice.remove();
    }
    
    // Optional: Show a little thank you message
    console.log('🍪 Thank you for accepting cookies!');
}
