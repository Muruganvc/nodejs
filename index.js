const express = require("express");
const PORT = 3000;
const app = express();


app.get('/hello', (req, res) => {
    res.json("Welcome to firebase function with node express");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});