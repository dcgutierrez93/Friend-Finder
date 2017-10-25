// ==================================
// Dependencies
// ==================================
const path = require('path');

// ==================================
// Routing
// ==================================
module.exports = function(app) {
    // Html get request.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
