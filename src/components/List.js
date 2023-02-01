import React from 'react';


function List( {songArray} )
{
    return (
        <div>
            <div className="titleBar">
                <div className="titleElement firstCol">TITLE</div>
                <div className="titleElement secondCol">ARTIST</div>
                <div className="titleElement thirdCol">GENRE</div>
                <div className="titleElement fourthCol">RATING</div>
                <div className="titleElement fifthCol" id="remove"></div>
            </div>

            {songArray.map(song => 
            (
                <div className="listRow" key={song.key}>
                    <div className="listElement firstCol">{song.title}</div>
                    <div className="listElement secondCol">{song.artist}</div>
                    <div className="listElement thirdCol">{song.genre}</div>
                    <div className="listElement fourthCol imgContainer"><img src={song.ratingImg} alt={song.rating}/></div>
                    <div className="listElement fifthCol"></div>
                </div>
            ))}
        </div>
    );
}

export default List;