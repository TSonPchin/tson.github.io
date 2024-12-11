const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Dummy route for login (just for illustration)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle authentication (this is just a placeholder)
    if (username === 'admin' && password === 'password') {
        res.send('Login successful');
    } else {
        res.send('Invalid credentials');
    }
});

// Route to serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
