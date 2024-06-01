// Initialize the Telegram Web App
Telegram.WebApp.ready();

// Get user information from Telegram
const user = Telegram.WebApp.initDataUnsafe.user;

// Debug: Log user data to console
console.log(user);

// Set user profile picture and name
if (user) {
    const profilePicElement = document.getElementById('profile-pic');
    const userNameElement = document.getElementById('user-name');

    if (user.photo_url) {
        profilePicElement.src = user.photo_url;
    } else {
        profilePicElement.src = 'default-profile.jpg';
    }

    userNameElement.textContent = `Hi ${user.first_name} | @${user.username}`;
}
