import { useState, useEffect } from "react";
import './App.css';
import './form/Form.css'
import './playlist/Playlist.css'
import Favorite from './favorite/Favorite';
import Form from './form/Form';
import Playlist from './playlist/Playlist';



function App() {

  const url = 'https://kmln4emvij.execute-api.us-west-2.amazonaws.com/deploy'

  const [playlist, setPlaylist] = useState([]);

  const emptySong = {
    title: '',
    artist: '',
    time: ''
  }

  const [faveSong, setFaveSong] = useState([])
  // const [deleteSong, setDeleteFaveSong] = useState([])

  const getSongs = () => {
    fetch(url + '/tunr')
      .then((resp) => resp.json())
      .then((data) => {
        setPlaylist(data.body)
        console.log(data)
      })
  }

  useEffect(() => getSongs(), [])

  const addFaveSong = (song) => {
    setFaveSong([...faveSong, song])
  }

  const deleteFaveSong = (index) => setFaveSong(faveSong.filter(
    (currentValue, currentIndex) => currentIndex !== index))



  const handleSubmit = (newSong) => {
    fetch(url + '/tunr', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    })
      .then(() => getSongs())
  }


  // DELETE

  const handleDelete = (song) => {
    fetch(url + '/tunr' + song.TunrId, {
      method: 'DELETE',
    })
      .then(() => getSongs())
  }





  return (
    <div className="App">
      <h1 className='header-tunr'>TUNR.</h1>
      <br></br>
      <h3 className='app-title'>FOR ALL YOUR PLAYLIST NEEDS</h3>
      <hr className="red-line"></hr>
      <Playlist playlist={playlist} addFaveSong={addFaveSong} />
      <Favorite faveSong={faveSong} handleDelete={handleDelete} deleteFaveSong={deleteFaveSong} />
      <Form song={emptySong} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
