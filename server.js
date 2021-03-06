// =============================================================================

// Dependencies

// =============================================================================
var express    = require('express');
var bodyParser = require('body-parser');

// =============================================================================

// Express Configuration

// =============================================================================
var app  = express();

var PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =============================================================================

// Router

// =============================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Port Listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
