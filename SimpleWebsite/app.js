const express = require("express");
const morgan = require("morgan");
const home = require("./routes/Home.js");
const dashboard = require("./routes/Dashboard.js");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(home);
app.use(dashboard);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "Error.html"));
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});