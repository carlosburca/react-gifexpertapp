export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}y&limit=10&api_key=Czon4r6x5MAAWucj3B4GSX7LGpokBhui`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}