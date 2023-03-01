const express = require('express');
const app = express();

app.get('/magic/:response', (req, res) => {
    const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful", "no"];
    let randomIndex = Math.floor(Math.random() * magicResponses.length);
    let response = req.params.response;
    res.send(`${response}? <br /> <br /> ${magicResponses[randomIndex]}`);
});

app.listen(5000, () => {
    console.log('listening');
});