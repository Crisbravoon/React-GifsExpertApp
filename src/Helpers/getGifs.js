

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=BJlfZsPiJcR4vTm46YG15ZGyD8JuYjw5&q=${encodeURI(category)}&limit=15`;
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
};