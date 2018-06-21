const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let movies = [{
    "id": 1,
    "title": "Forrest Gump",
    "duration": "142",
    "director": "Zemekis",
    "year": 1994,
    "small_img_urls": ["forrest.jpg", "forresdsfst.jpg", "forrest.jpg"],
    "img_src": "forrest.jpg"
},{
    "id": 2,
    "title": "Terminator",
    "duration": "150",
    "director": "Cameron",
    "year": 1992,
    "img_src": "terminator.jpg"
}];

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.post('/api/movies', (req, res) => {
    let movie = req.body;
    movie.id = movies.length + 1;
    const length = movies.push(movie);
    res.send(movies[length - 1]);
});

app.put('/api/movies/:id', (req, res) => {
    console.log(req.body);
});

app.get('/api/movies/:id', function (req, res) {
    const id = req.params.id;
    const movie = movies.find(function (item) {
        return item.id === +id;
    });

    if (movie !== undefined) {
        res.send(movie);
    } else {
        res.sendStatus(400);
    }
});


app.delete('/api/movies/:id', function (req, res) {
    
});

app.use(express.static('client'));
app.listen(3001, () => {
    console.log('Example app listening on port 3001!')
});

