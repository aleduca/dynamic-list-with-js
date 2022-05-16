// https://swapi.dev/api/films

import axios from 'axios';

async function getAllStarWarsMovies(){
    try {
        var movies = document.querySelector('#movies');
        var ul = document.createElement('ul');
        const {data} = await axios.get('https://swapi.dev/api/films');
        data['results'].forEach(movie => {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.setAttribute('class', 'btn_delete');
            button.setAttribute('data-id', movie.episode_id);
            button.textContent = 'Delete';

            button.addEventListener('click', (event) => {
                console.log('clicked', button.getAttribute('data-id'));
            })
            
            li.textContent = movie.title;
            li.append(button);
            ul.append(li);
        });

        movies.append(ul);
    } catch (error) {
       console.log(error.response);
    }
}

getAllStarWarsMovies();