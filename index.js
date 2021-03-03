const express = require('express')
var path = require('path')
const app = express();
const port = 8000;

app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname })
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});