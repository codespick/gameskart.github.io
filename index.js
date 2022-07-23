const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 1000;


// app.use(express.(path.join(__dirname, "/src")));
const targetPath = path.join(__dirname, "/src/");

app.get("/", (req, res) => {
    res.sendFile(targetPath + "App.js");
});


app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
