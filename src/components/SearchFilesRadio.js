import React from "react"


function SearchFilesRadio(props) {
    return (
        <div>
            <p>{props.name}</p>
            <input type="radio" value={props.value} 
            name="file"
            onChange={() => props.onRadioChange(props.value)} />
            
        </div>
    )
}

export default SearchFilesRadio