let newMovie = {}
axios.post('api/movies', {
    "name": "Blade",
    "year": 1999
}).then(res => newMovie = res.data)

document.getElementById('delete-button').addEventListener('click', function (){
    axios.delete("api/movies/3").then(res => console.log(res));
});

document.getElementById('put-button').addEventListener('click', function (){
    newMovie.year = 1998;
    axios.put("api/movies/"+newMovie.id, newMovie).then(res => console.log(res));
});