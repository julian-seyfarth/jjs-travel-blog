let express = require('express');

let app = express();

app.use(express.static(__dirname));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080);