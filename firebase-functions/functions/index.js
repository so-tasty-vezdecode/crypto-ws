const functions = require('firebase-functions');
const fetch = require('node-fetch');
const cors = require('cors')({
    origin: true,
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
    return cors(req, res, async () => {
        const data = await fetch(
            'https://api.exchange.bitcoin.com/api/2/public/ticker',
        )
            .then(data => data.json())

        res.json(data);
    });
});
