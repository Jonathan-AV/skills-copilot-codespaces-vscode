// Create web server
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, '../data/comments.json');

// Read comments from comments.json
router.get('/', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(data);
        }
    });
});

// Add comment to comments.json
router.post('/', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            const comments = JSON.parse(data);
            const newComment = {
                id: comments.length + 1,
            };
        };
    });
});