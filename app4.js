async function getPokemon(nameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    try {
        const response = await fetch(url);

        if (response.status === 404) {
            throw new Error('Pokemon not found!');
        }

        const pokemon = await response.json();

        // Extract ข้อมูลที่ต้องการ
        return {
            name: pokemon.name,
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(t => t.type.name),
            image: pokemon.sprites.front_default,
            stats: pokemon.stats.map(s => ({
                name: s.stat.name,
                value: s.base_stat
            }))
        };

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

async function getPokemonDetails(nameOrId){
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    try {
        const response = await fetch(url);

        if (response.status === 404) {
            throw new Error('Pokemon not found!');
        }

        const pokemon = await response.json();

        // Extract ข้อมูลที่ต้องการ
        return {
            name: pokemon.name,
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(t => t.type.name),
            image: pokemon.sprites.front_default,
            stats: pokemon.stats.map(s => ({
                name: s.stat.name,
                value: s.base_stat
            }))
        };

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}
console.log(await getPokemon('charizard'));