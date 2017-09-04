import React, { Component } from 'react';

class GifModal extends Component {
  render() {
    return (
      <div>
        <div id="gif-modal" onClick={this.props.closeModal}>
          <iframe src={this.props.url} width="200" height="200" title="gif"></iframe>
          <h2 id="close">CLOSE</h2>
        </div>
      </div>
    )
  }
}

export default GifModal;
