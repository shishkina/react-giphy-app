import React, { Component } from 'react';

class AddTextForm extends Component {
  render() {
    return (
      <form className="form"
        onSubmit={this.props.handleInputSubmit}
        >
        <input className="search" id="input"
          type="text"
          value={this.props.inputText}
          name="text"
          placeholder="Search text: "
          onChange={this.props.handleInputChange}
          />
        <input className="search" id="quantity"
          type="text"
          value={this.props.numberOfGifs}
          name="number"
          placeholder="how many gifs?"
          onChange={this.props.handleNumberOfQuotesChange}
        />
        <input className="search" id="search-button"
          type="submit"
          value="Search GIF" />
      </form>
    );
  }
}

export default AddTextForm;
