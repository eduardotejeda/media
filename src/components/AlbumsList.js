import { useFetchAlbumsQuery } from "../store";

function AlbumList({user}) {
    const {data, error, isLoading } = useFetchAlbumsQuery();
return <div>
    Albums for {user.name}
</div>;
}
export default AlbumList;