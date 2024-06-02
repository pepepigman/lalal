// Initialize the Telegram Web App
Telegram.WebApp.ready();

// Function to create a wallet
async function createWallet() {
    try {
        const response = await fetch('http://localhost:3000/create-wallet', { method: 'POST' });
        const data = await response.json();
        console.log('Wallet created:', data);
        alert(`New Wallet Created!\nPublic Key: ${data.publicKey}`);
        localStorage.setItem('walletPublicKey', data.publicKey);
        updateUI();
    } catch (error) {
        console.error('Error creating wallet:', error);
    }
}

// Function to import a wallet
async function importWallet() {
    const secretKey = prompt('Enter your secret key (comma-separated):');
    try {
        const response = await fetch('http://localhost:3000/import-wallet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secretKey: secretKey.split(',').map(Number) })
        });
        const data = await response.json();
        console.log('Wallet imported:', data);
        alert(`Wallet Imported!\nPublic Key: ${data.publicKey}`);
        localStorage.setItem('walletPublicKey', data.publicKey);
        updateUI();
    } catch (error) {
        console.error('Error importing wallet:', error);
    }
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
