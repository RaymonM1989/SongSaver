import React            from 'react';
import InputBarRenderer from './InputBarRenderer.js';
import Warning          from './Warning.js';


let message = "";
let color   = "rgb(0, 92, 153)";

class InputBar extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            title: "",
            artist: "",
            genre: "default",
            rating: "",
            ratingImg: "img/rating1.png",
            key: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event)
    {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }, () => 
        {
            if (this.state.rating === "1")      { this.setState({ ratingImg: "img/rating1.png" }) }
            else if (this.state.rating === "2") { this.setState({ ratingImg: "img/rating2.png" }) }
            else if (this.state.rating === "3") { this.setState({ ratingImg: "img/rating3.png" }) }
            else if (this.state.rating === "4") { this.setState({ ratingImg: "img/rating4.png" }) }
            else if (this.state.rating === "5") { this.setState({ ratingImg: "img/rating5.png" }) }
            this.setState({ key: this.state.title + this.state.artist });
        }); 
    };


    handleSubmit(event)
    {
        event.preventDefault();

        // Check to see if all fields are filled in
        if (this.state.title === "" || this.state.artist === "" || this.state.genre === "default" || this.state.rating === "")
        {
            message="PLEASE FILL IN ALL FIELDS";
            color   = "rgb(216, 0, 0)";

            this.forceUpdate();
            return;
        } 
        else
        {
            // Send all data from this.state (current input) to 'addSong()' 
            this.props.addSong(this.state);

            message="Your song was added to the Playlist";
            color   = "rgb(0, 92, 153)";

            // Reset input fields (and thus 'this.state' data)
            this.setState(
                {
                    title: "",
                    artist: "",
                    genre: "default",
                    rating: "",
                    ratingImg: "img/rating1.png",
                    key: ""
                }
            ); 
        } 
    };


    render()
    {
        return (
            <div>
                <InputBarRenderer 
                    handleChange    ={this.handleChange}
                    onSubmit        ={this.handleSubmit}
                    inputBarState   ={this.state}
                /> 
                <Warning message={message} color={color} />
            </div>
        )
    };
}

export default InputBar;