const express = require('express');
const https = require('https');

const app = express();

app.use((req, res) => {
    const URL_SPLIT = req.url.split('/')
    let options = {
        hostname: URL_SPLIT[1],
        path: '/' + URL_SPLIT.slice(2, URL_SPLIT.length).join('/'),
    };
    let proxy = https.request(options, function (targetRes) {
        targetRes.headers['Access-Control-Allow-Origin'] = '*'
        res.writeHead(targetRes.statusCode, {
            ...targetRes.headers, 
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        targetRes.pipe(res, {
            end: true
        });
    });
    req.pipe(proxy, {
        end: true
    });
});

app.listen(3000);

console.log("Proxy server is running on localhost:3000");