import React, {useState}    from 'react';
import InputBar             from './InputBar.js';
import List                 from './List.js';
import baseSongArray        from './SongDatabase.js';


export const Main = () =>
{
    const [songArray, setSongArray] = useState(baseSongArray)

    const addSong = (song) => 
    {
        setSongArray([song, ...songArray])
    };


    function deleteSong(key)
    {
        const newSongArray = songArray.filter((song) => song.key !== key);
        setSongArray(newSongArray);
    };

    
    return (
        <main className="main">
            <InputBar addSong={addSong} />
            <List songArray={songArray} setSongArray={setSongArray} deleteSong={deleteSong}/>
        </main>
    );
}

// export default Main;