// Initialize the Telegram Web App
Telegram.WebApp.ready();

// Get user information from Telegram
const user = Telegram.WebApp.initDataUnsafe.user;

// Set user profile picture and name if needed
if (user) {
    // You can use user data if required
    console.log(`User: ${user.first_name} (@${user.username})`);
}
