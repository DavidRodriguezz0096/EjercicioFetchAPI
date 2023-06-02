document.addEventListener('DOMContentLoaded', function(){
    const pokedexContainer = document.querySelector('.pokedex-container')
    
    function fetchPokemon(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                const pokemonElement = document.createElement('div');
                    pokemonElement.classList.add('pokemon-card');
                    pokemonElement.innerHTML = `
                    <div>
                        <h2>${pokemon.name}</h2>
                        <img src= "${pokemon.sprites.front_default}" alt="">
                    </div>
                    `;
                    pokedexContainer.appendChild(pokemonElement);
                })
                .catch((error) => {
                    console.log("Error de conexión: " + error);
                });
    }

    // const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    // for (let i = 0; i < pokemonIds.length; i++) {
        //     fetchPokemon(pokemonIds[i]);
        // }
        
    const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    pokemonIds.map((id) => {
        fetchPokemon(id);
    })  
    
});
