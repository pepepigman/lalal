const express = require('express');
const bodyParser = require('body-parser');
const { Keypair, Connection, clusterApiUrl } = require('@solana/web3.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to create a new wallet
app.post('/create-wallet', (req, res) => {
    const keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toBase58();
    const secretKey = Array.from(keypair.secretKey);

    res.json({ publicKey, secretKey });
});

// Endpoint to import an existing wallet
app.post('/import-wallet', (req, res) => {
    const { secretKey } = req.body;
    const keypair = Keypair.fromSecretKey(Uint8Array.from(secretKey));
    const publicKey = keypair.publicKey.toBase58();

    res.json({ publicKey });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
