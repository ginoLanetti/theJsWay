const express = require('express');
const app = express();
app.use(express.static("public"));
const multer = require('multer');
const upload = multer;
const bodyParser = require('body-parser');
const jsonParser = bodyParser;
const links = [{
    title: 'Facebook',
    url: 'http://www.facebook.com',
    author: 'Me'
}, {
    title: 'Instagram',
    url: 'http://www.instagram.com',
    author: 'Also Me'
}];
