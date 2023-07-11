import Button from './Button';
import ExpandablePanel from './ExpandablePanel';

function AlbumListItem({album}) {
    const header = <div>{album.title}</div>;

    return ( <ExpandablePanel key={album.id} header={header}>
            List of photos in the album
            </ExpandablePanel>
        );

}

export default AlbumListItem;