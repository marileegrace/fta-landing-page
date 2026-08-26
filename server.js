const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve the Osmosis page at /osmosis
app.get('/osmosis', (req, res) => {
      res.sendFile(path.join(__dirname, 'osmosis', 'index.html'));
});

// Catch-all route — serve index.html for any unmatched route
app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
      console.log(`FTA Landing Site running on port ${PORT}`);
});
