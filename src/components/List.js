import React        from 'react';
import ListRenderer from './ListRenderer.js';


class List extends React.Component
{ 
    constructor()
    {
        super();
        this.state =
        {
            titleSortAZ: false,
            artistSortAZ: false,
            ratingSortAZ: false
        }
        this.sortTitle = this.sortTitle.bind(this);
        this.sortArtist = this.sortArtist.bind(this);
        this.sortRating = this.sortRating.bind(this);
    };
    
    
    sortTitle()
    {
        const titleSortArray = [].concat(this.props.songArray)

        if (this.state.titleSortAZ === false)
        {
            titleSortArray.sort((a, b) => a.title > b.title ? 1 : -1 )
            this.setState( { titleSortAZ: true } );

            // Reset 'Artist' and 'Rating' so the next time they're clicked, they are sorted in ascending order
            this.setState( { artistSortAZ: false } );
            this.setState( { ratingSortAZ: false } );
        }
        else
        {
            titleSortArray.sort((a, b) => a.title > b.title ? -1 : 1 )
            this.setState( { titleSortAZ: false } );

            // Reset 'Artist' and 'Rating' so the next time they're clicked, they are sorted in ascending order
            this.setState( { artistSortAZ: false } );
            this.setState( { ratingSortAZ: false } );
        }
        
        this.props.setSongArray(titleSortArray);
    };


    sortArtist()
    {
        const artistSortArray = [].concat(this.props.songArray)

        if (this.state.artistSortAZ === false)
        {
            artistSortArray.sort((a, b) => a.artist > b.artist ? 1 : -1 )
            this.setState( { artistSortAZ: true } );

            // Reset 'Title' and 'Rating' so the next time they're clicked, they are sorted in ascending order
            this.setState( { titleSortAZ: false } );
            this.setState( { ratingSortAZ: false } );
        }
        else
        {
            artistSortArray.sort((a, b) => a.artist > b.artist ? -1 : 1 )
            this.setState( { artistSortAZ: false } );

            // Reset 'Title' and 'Rating' so the next time they're clicked, they are sorted in ascending order
            this.setState( { titleSortAZ: false } );
            this.setState( { ratingSortAZ: false } );
        }
        
        this.props.setSongArray(artistSortArray);
    };


    sortRating()
    {
        const ratingSortArray = [].concat(this.props.songArray)

        if (this.state.ratingSortAZ === false)
        {
            ratingSortArray.sort((a, b) => a.rating - b.rating )
            this.setState( { ratingSortAZ: true } );

            // Reset 'Title' and 'Artsit' so the next time they're clicked, they are sorted in ascending order
            this.setState( { titleSortAZ: false } );
            this.setState( { artistSortAZ: false } );
        }
        else
        {
            ratingSortArray.sort((a, b) => b.rating - a.rating )
            this.setState( { ratingSortAZ: false } );

            // Reset 'Title' and 'Artist' so the next time they're clicked, they are sorted in ascending order
            this.setState( { titleSortAZ: false } );
            this.setState( { artistSortAZ: false } );
        }
        
        this.props.setSongArray(ratingSortArray);
    };


    render()
    {
        return (
            <div>
                <ListRenderer 
                    songArray={this.props.songArray}
                    deleteSong={this.props.deleteSong}
                    sortTitle={this.sortTitle}
                    sortArtist={this.sortArtist}
                    sortRating={this.sortRating} />
            </div>
        );
    };
}

export default List;