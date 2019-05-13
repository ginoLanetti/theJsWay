const express = require('express');
const app = express();
//sending responses:
app.get('/', (request, response) => {
    response.send('Howdy, welcome to my kitchen!');
});
//listening to requests: (// If process.env.PORT is not defined, port number 3000 is used)
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${listener.address().port}`);
});
//enabling CORS (https://enable-cors.org/server_expressjs.html)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Define an article list
const articles = [{
        id: 1,
        title: "First article",
        content: "Hello World!"
    },
    {
        id: 2,
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
    },
    {
        id: 3,
        title: "Lorem ipsum in French",
        content: "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
    }
];
// Return the articles list in JSON format
app.get("/api/articles", (request, response) => {
    response.json(articles);
});
//Accepting data - Forms (extracting data by 'multer' package):
const multer = require('multer');
const upload = multer();
app.post('/animals', upload.array(), (request, response) => {
    const name = request.body.name;
    const vote = request.body.strongest;
    response.send(`Hello ${name}, your vote is: ${vote}`);
});
//Accepting data - JSON (extracting data by 'body-parser' package):
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.post('./api/cars', jsonParser, (request, response) => {
    const cars = request.body;
    response.send(`You send me a list of cars: ${JSON.stringify(cars)}`);
});
//Handling web pages
app.get("/hello", (request, response) => {
    response.sendFile(`${__dirname}/views/hello.html`);
});
// Serve content of the "public" subfolder directly
app.use(express.static("public"));