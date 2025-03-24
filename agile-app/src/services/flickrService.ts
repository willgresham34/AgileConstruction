const fetchFlickrPhotos = async (photoset_id: String) => {
    const apiKey = "152d305ac8141342c1209a8255ee7232";
    const user_id = "202495024@N06";

    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photoset_id}&user_id=${user_id}&format=json&nojsoncallback=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        // Extract photo objects with src (URL) and name (title)
        const photoObjects = data.photoset.photo.map((photo: any) => {
            return {
                src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
                name: photo.title,
            };
        });

        return photoObjects;

    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
};

export const flickrService = async (photoset_id: String) => {
    return await fetchFlickrPhotos(photoset_id);
};
