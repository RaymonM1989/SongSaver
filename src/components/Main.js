import React, {useState}    from 'react';
import InputBar             from './InputBar.js';
import List                 from './List.js';
import baseSongArray        from './SongDatabase.js';


function Main()
{
    const [songArray, setSongArray] = useState(baseSongArray)

    const addSong = (song) => 
    {
        setSongArray([song, ...songArray])
    }

    return (
        <main className="main">
            <InputBar addSong={addSong} />
            <List songArray={songArray} />
        </main>
    )
}

export default Main;