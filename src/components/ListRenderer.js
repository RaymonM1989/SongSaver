import React from 'react';


function ListRenderer(props)
{
    return (
        <div>
            <div className="titleBar">
                <div className="titleElement sort firstCol" onClick={props.sortTitle}>TITLE</div>
                <div className="titleElement sort secondCol" onClick={props.sortArtist}>ARTIST</div>
                <div className="titleElement thirdCol">GENRE</div>
                <div className="titleElement sort fourthCol" onClick={props.sortRating}>RATING</div>
                <div className="titleElement fifthCol" id="remove"></div>
            </div>

            {props.songArray.map(song => 
            (
                <div className="listRow" key={song.key}>
                    <div className="listElement firstCol">{song.title}</div>
                    <div className="listElement secondCol">{song.artist}</div>
                    <div className="listElement thirdCol">{song.genre}</div>
                    <div className="listElement fourthCol imgContainer"><img src={song.ratingImg} alt={song.rating}/></div>
                    <div className="listElement fifthCol imgContainer"><button onClick={() => props.deleteSong(song.key)}><img src="img/delete.png" alt="Remove Song" /></button></div>
                </div>
            ))}
        </div>
    );
}

export default ListRenderer;