const express = require('express');
const app = express();
app.use(express.static("public"));
const multer = require('multer');
const upload = multer();
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${listener.address().port}`);
});
//enabling CORS (https://enable-cors.org/server_expressjs.html)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const links = [{
    title: 'Facebook',
    url: 'http://www.facebook.com',
    author: 'Me'
}, {
    title: 'Instagram',
    url: 'http://www.instagram.com',
    author: 'Also Me'
}];
app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/views/socialNewsApp.html`);
});
app.get('/links', (request, response) => {
    response.json(links);
})
app.post('/links', upload.array(), (request, response) => {
    const title = request.body.title;
    const url = request.body.url;
    const author = request.bodu.author;
    response.send(`Hello ${name}, your vote is: ${vote}`);
});