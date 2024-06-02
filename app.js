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

// Function to create a wallet
async function createWallet() {
    const response = await fetch('/create-wallet', { method: 'POST' });
    const data = await response.json();
    console.log('Wallet created:', data);
    alert(`New Wallet Created!\nPublic Key: ${data.publicKey}`);
    localStorage.setItem('walletPublicKey', data.publicKey);
    updateUI();
}

// Function to import a wallet
async function importWallet() {
    const secretKey = prompt('Enter your secret key (comma-separated):');
    const response = await fetch('/import-wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secretKey: secretKey.split(',').map(Number) })
    });
    const data = await response.json();
    console.log('Wallet imported:', data);
    alert(`Wallet Imported!\nPublic Key: ${data.publicKey}`);
    localStorage.setItem('walletPublicKey', data.publicKey);
    updateUI();
}

// Function to update the UI based on wallet status
function updateUI() {
    const hasWallet = !!localStorage.getItem('walletPublicKey');
    if (hasWallet) {
        document.querySelector('.quick-buy').style.display = 'block';
        document.querySelector('.dashboard').style.display = 'block';
        document.querySelector('.create-wallet').style.display = 'none';
        document.querySelector('.import-wallet').style.display = 'none';
    } else {
        document.querySelector('.quick-buy').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'none';
        document.querySelector('.create-wallet').style.display = 'block';
        document.querySelector('.import-wallet').style.display = 'block';
    }
}

// Initialize UI on page load
updateUI();
