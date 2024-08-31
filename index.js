const express = require("express"); 

// cài mongoose
const database = require("./config/database");

// cài env
require("dotenv").config();

//  cài body-parser
const bodyParser = require('body-parser');

// cài cors
const cors = require("cors");

// cài cookieParser
const cookieParser = require("cookie-parser");

const routesApiV1 = require("./api/v1/routes/index.route");

const app = express(); 
const port = process.env.PORT;

database.connect();

// parser application/json
app.use(bodyParser.json());

app.use(cors());

app.use(cookieParser());

// routes version1
routesApiV1(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
