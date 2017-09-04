import React, { Component } from 'react';

class AddTextForm extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleInputSubmit}
        >
        <input className="search" id="input"
          type="text"
          value={this.props.inputText}
          name="text"
          placeholder="Search text: "
          onChange={this.props.handleInputChange}
          />
        <input className="search" id="search-button"
          type="submit"
          value="Search GIF" />
      </form>
    );
  }
}

export default AddTextForm;
