import { useFetchPhotoQuery } from "../store";

function PhotoList({album}) {
    useFetchPhotoQuery(album);
    return 'PhotoList'
}

export default PhotoList;