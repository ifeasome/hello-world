const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('hey world');
});

app.listen(PORT, () => {
    console.log(`App is listening on port${PORT}`);
});
