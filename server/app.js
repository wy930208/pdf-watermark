'use strict';

const express = require('express');
const pdftk = require('node-pdftk');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    pdftk
        .input(path.resolve(__dirname + '/../files/javascript.pdf'))
        .stamp(path.resolve(__dirname + '/../files/watermark.pdf'))
        .output(path.resolve(__dirname + '/../files/javascript_watermark.pdf'))
        .then(buffer => {
            return res.send('successful');
        })
        .catch(err => {
            console.error(err);
            return res.send('failed');
        });
});


app.listen(3100);