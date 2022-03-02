export function get20Pokemon(url) {
    // According to PokeAPI documentation All Pokemons from gen 1-7 = 807 pokemons
    var pokemons = 807
    var lim = 20;

    const generateNewOffSet= () => {
        return (Math.floor(Math.random() * pokemons));   
    };
    let urlList =[];
    for(var i = 0; i<lim; i++){
        urlList.push(url + generateNewOffSet());
    }
    return urlList;
}

export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => alert("Sorry, couldn't find that Pokemon...", err))
    })
}