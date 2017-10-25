// ==================================
// Dependencies
// ==================================
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

// ==================================
// Express Configuration
// ==================================
const app = express;

const PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ==================================
// Router
// ==================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Port Listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
