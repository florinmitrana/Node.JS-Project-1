const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app =  express();

const port = process.env.PORT || 5000;

const dbconfig = require('./db');

app.use(express.json());

app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.use(errorHandler);
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});

