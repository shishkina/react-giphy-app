import React, { Component } from 'react';


class GifView extends Component {
  render() {
    return (
      <div className="gif-view" onClick={this.props.openModal}>
        <iframe src={this.props.url} width="200" height="200" title="gif"></iframe>
      </div>
    )
  }
}

export default GifView;
