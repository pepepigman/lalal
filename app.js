// Initialize the Telegram Web App
Telegram.WebApp.ready();

// Get user information from Telegram
const user = Telegram.WebApp.initDataUnsafe.user;

// Set user profile picture and name
if (user) {
    document.getElementById('profile-pic').src = user.photo_url || 'default-profile.jpg';
    document.getElementById('user-name').textContent = `Hi ${user.first_name}`;
}
