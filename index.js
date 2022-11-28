const express = require('express');
const app = express();
const databaseConnect = require('./config/connectDB');
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Connect DB
databaseConnect.connect();


// Middleware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Server Up and running on port ${port}`)
})