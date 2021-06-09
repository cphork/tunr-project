import React from 'react';


const Favorite = ({ faveSong, deleteFaveSong }) => {


    const loaded = () => (
        <div className='favorite'>
            <h2>Favorite Songs List</h2>
            <div className='fave-container'>
                {faveSong.map((tunr, index) => (
                    <article>
                        <h5>{tunr.title}</h5>
                        <h5>{tunr.artist}</h5>
                        <h5>{tunr.time}</h5>
                        <button
                            onClick={() =>
                                deleteFaveSong(index)}
                        >Remove from Faves

                        </button>
                    </article>
                ))}
            </div>
        </div>
    )

    const loading = () => (
        <div className='text-align'>
            <div className='favorite'>
                <h2 className='song-list-text'>Favorite Songs List</h2>
                <div className='fave-container'>
                    <h5 className='song-artist-text'>Song Artist Time</h5>
                </div>
            </div>
        </div>
    )

    return faveSong.length > 0 ? loaded() : loading()
}

export default Favorite