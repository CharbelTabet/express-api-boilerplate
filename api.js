// CALL packages (add your packages)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


// CALL routers (add your routes here)
const api_routes = require('./routes/model_name');


// CONNECT to database (replace db link in the .env file)
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});


// USE express app (add your express app configuration)
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// USE routers (add routes you previously called)
app.use('/', api_routes);

// USE other middlewares (add your middlewares)
app.use((req, res) => {
    return res.send(`${req.url} not found, 404`); // err 404 handling
});


// Cross-Origin Resource Sharing (CORS) server (add your server configuration)
app.use(cors);
PORT = process.env.PORT || 5000
app.listen(PORT, () => {console.log(`App listening at port ${PORT}`)});
