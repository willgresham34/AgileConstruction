const apiKey = '152d305ac8141342c1209a8255ee7232'; 
const userId = '202081058@N07'; 

// Function to fetch photos from a specific photoset (album)
export async function fetchPhotosFromPhotoset(photosetId: string): Promise<any[]> {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photosetId}&user_id=${userId}&format=json&nojsoncallback=1`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.stat === "ok") {
            return data.photoset.photo.map((photo: any) => ({
                id: photo.id,
                title: photo.title,
                src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg` // Change size suffix as needed
            }));
        } else {
            console.error('Error fetching photos:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
