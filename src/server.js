const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http");
const bodyParser =require("body-parser");

const routes = require("./routes");

const {acess} = require("./database/Mongo")

const app = express();

mongoose.connect(acess, {useNewUrlParser:true, useUnifiedTopology:true})


app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT || 3333 );
