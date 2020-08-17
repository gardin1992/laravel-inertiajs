
export const pokemon_getId = url => {
    if (typeof url != 'string')
        return url;

    const arr = url.split("/");
    arr.pop();

    return arr.pop();
}

export const pokemon_getUrlImage =
    url => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_getId(url)}.png`