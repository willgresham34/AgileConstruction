import { API_KEY, USER_ID } from "../config.js";

const fetchFlickrPhotos = async (galleryId: string) => {

    const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${galleryId}&user_id=${USER_ID}&format=json&nojsoncallback=1`;

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

export const flickrService = async (galleryId: string) => {
    return await fetchFlickrPhotos(galleryId);
};
