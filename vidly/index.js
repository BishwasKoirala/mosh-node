const mongoose = require('mongoose')
const Joi = require('joi');
const genres = require('./routes/genres');
const customers = require("./routes/customers")
const express = require('express');
const app = express();

mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => {
      console.log("connected to mongoDB : vildy")
    }).catch((err) => console.log("mongo db connection error"))

app.use(express.json());
app.use('/api/genres', genres);
app.use("/api/customers" , customers)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));