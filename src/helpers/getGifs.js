
export const getGifs = async (category) => {
    const api_key = 'MvQHSni8ObxbNMsEpddRFm70mjx06vaV'

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=5&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gif
}