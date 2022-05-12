

export const getGifs = async (category) => {

    try {
        const apiKey = 'qWAYwTPE4dlUWS5i616fOqlxdOhBThmO';
        const apiBaseUrl = 'https://api.giphy.com/v1/gifs/search';
        const apiUrl = `${apiBaseUrl}?api_key=${apiKey}&q=${encodeURI(category)}&limit=5`;

        const response = await fetch(apiUrl);
        const { data } = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);

        return gifs;


    } catch (error) {
        return null;
    }

}
