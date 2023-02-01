import React from 'react'


function InputBarRenderer(props)
{
    return (
        <form className="form" onSubmit={props.onSubmit} >

            <div className="formElement firstCol">
                <input
                    className="inputField"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={props.inputBarState.title}
                    onChange={props.handleChange}
                />
            </div>

            <div className="formElement secondCol">
                <input
                className="inputField"
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    value={props.inputBarState.artist}
                    onChange={props.handleChange}
                />
            </div>

            <div className="formElement thirdCol">
                <select 
                    className="dropdown inputField"
                    name="genre"
                    value={props.inputBarState.genre}
                    onChange={props.handleChange}
                >
                    <option value="default" disabled hidden>Genre</option>
                    <option value="Blues">Blues</option>
                    <option value="Christmas">Christmas</option>
                    <option value="Classical">Classical</option>
                    <option value="Country">Country</option>
                    <option value="Dance">Dance</option>
                    <option value="Disco">Disco</option>
                    <option value="Folk">Folk</option>
                    <option value="Grunge">Grunge</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Indie">Indie</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                    <option value="Movies & Games">Movies & Games</option>
                    <option value="New Age">New Age</option>
                    <option value="Opera">Opera</option>
                    <option value="Pop">Pop</option>
                    <option value="Punk">Punk</option>
                    <option value="R&B">R&B</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Rock">Rock</option>
                    <option value="Soul">Soul</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="formElement fourthCol">
                <div className="rating inputField">
                    <input 
                        id="rating5"
                        type="radio"  
                        name="rating"
                        value="5"
                        checked={props.inputBarState.rating === "5"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="rating5"></label>
                    <input 
                        id="rating4"
                        type="radio"  
                        name="rating"
                        value="4"
                        checked={props.inputBarState.rating === "4"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="rating4"></label>
                    <input 
                        id="rating3"
                        type="radio"  
                        name="rating"
                        value="3"
                        checked={props.inputBarState.rating === "3"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="rating3"></label>
                    <input 
                        id="rating2"
                        type="radio"  
                        name="rating"
                        value="2"
                        checked={props.inputBarState.rating === "2"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="rating2"></label>
                    <input 
                        id="rating1"
                        type="radio"  
                        name="rating"
                        value="1"
                        checked={props.inputBarState.rating === "1"}
                        onChange={props.handleChange}
                    />
                    <label htmlFor="rating1"></label>                    
                </div>
            </div>

            <div className="formElement fifthCol">
                <button className="submitButton inputField">ADD</button>
            </div>
        </form>
    );
}

export default InputBarRenderer;