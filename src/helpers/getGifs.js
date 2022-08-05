export const getGifs = async (categorie) => {
    const api_key = '9GiFMb9pQCVIqdDedCkxNJQqgwAXX3hX'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categorie}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}