import {useEffect, useState} from "react";

import {albumService} from "../../services";

import Album from "../album/Album";

function Albums() {
  let [albums,setAlbums] = useState([])

  useEffect(() => {
    albumService.getAll().then(({data})=>setAlbums(data))
  },[])

  return (
    <div>
      <h3>Albums</h3>
      {albums.map(album=><Album key={album.id} album={album}/>)}
    </div>
  );
}

export default Albums;