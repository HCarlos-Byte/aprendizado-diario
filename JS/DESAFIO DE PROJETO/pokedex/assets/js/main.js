
const pokemonList = document.getElementById('container-pokemon')
const carregarMais = document.getElementById('carregarMais')
const limit = 9
let offset = 0

function loadPokemonIten(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
        `<div id="pokemon" class="${pokemon.type}">
            <section class="pokemon-title">
                <h1>${pokemon.name}</h1>
                <span>#${pokemon.number}</span>
            </section>
            <section class="resumo">
                <section class="tipos">
                    ${pokemon.types.map((type) => `<p class="tipo ${type}">${type}</p>`).join('')}
                </section>
                <section class="img">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </section>
            </section>
        </div>`
    ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonIten(offset, limit)

carregarMais.addEventListener('click', () => {
    offset += limit
    loadPokemonIten(offset, limit)
})
