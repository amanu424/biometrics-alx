const express = require("express")
const path = require('path');

const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/done', (req, res) => {
    res.render('done');
})
app.listen(8989, () => console.log("Server started"))