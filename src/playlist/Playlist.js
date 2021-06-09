import React from 'react';


const myPlaylist = (props) => {
    const { playlist, addFaveSong } = props

    const loaded = () => (
        <div>
            <h1 className='playlist-text'>PLAYLIST 1</h1>
            {playlist.map((song, index) => (

                <div className='all-btn'>

                    <h3 className='artist-text'>{song.artist}</h3>
                    <button
                        className='heart-btn'
                        onClick={() =>
                            addFaveSong(song)}
                    >&#9825;
                        </button>

                    <h3 className='title-text'>{song.title}</h3>
                    <h4 className='time-text'>{song.time}</h4>


                </div>


            ))}
        </div>
    );

    const loading = () => (
        <div>
            <h1>Loading...</h1>
        </div>
    )

    return playlist.length > 0 ? loaded() : loading()
}


export default myPlaylist
