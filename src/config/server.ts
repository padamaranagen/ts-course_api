import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req, res) =>{
    res.send(`<h1>Server up and running !</h1>`);
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));