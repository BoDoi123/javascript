// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }

//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

async function fetchDate() {
    const pokemon_name = document.querySelector("#pokemon_name");

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon_name.value}`
        );

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        displayPokemon(data);
    } catch (error) {
        console.error(error);
    }
}

function displayPokemon(data) {
    const img_pokemon = document.getElementById("pokemon_sprite");

    img_pokemon.src = data.sprites.front_default;
    img_pokemon.style.display = "block";
}
