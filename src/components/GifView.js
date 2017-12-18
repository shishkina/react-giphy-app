import React, { Component } from 'react';


class GifView extends Component {
  render() {
    return (
      <div className="gif-view">
        <iframe src={this.props.url} width="500" height="500" title="gif"></iframe>
      </div>
    )
  }
}

export default GifView;
