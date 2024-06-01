// Initialize the Telegram Web App
Telegram.WebApp.ready();

// Get user information from Telegram
const user = Telegram.WebApp.initDataUnsafe.user;

// Set user profile picture and name if needed
if (user) {
    console.log(`User: ${user.first_name} (@${user.username})`);
}

// Function to show the start screen
function showStartScreen() {
    document.getElementById('quick-buy-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

// Function to show the quick buy screen
function showQuickBuyScreen() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quick-buy-screen').classList.remove('hidden');
}

// Add event listener to Quick Buy button
document.querySelector('.quick-buy').addEventListener('click', showQuickBuyScreen);
