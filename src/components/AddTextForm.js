import React from 'react';

const AddTextForm = (props) => {
    return (
      <form className="form"
        onSubmit={props.handleInputSubmit}
        >
        <input className="search" id="input"
          type="text"
          value={props.inputText}
          name="text"
          placeholder="Search text: "
          onChange={props.handleInputChange}
          />
        <input className="search" id="quantity"
          type="text"
          value={props.numberOfGifs}
          name="number"
          placeholder="how many gifs?"
          onChange={props.handleNumberOfGifsChange}
        />
        <input className="search" id="search-button"
          type="submit"
          value="Search GIF" />
      </form>
    );
  }
export default AddTextForm;
