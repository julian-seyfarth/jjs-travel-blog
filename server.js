let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/jjs-travel-blog'))

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname + '/dist/jjs-travel-blog/index.html');
});

app.listen(process.env.PORT || 8080);