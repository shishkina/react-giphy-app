import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.gifs === this.props.gifs);
  }

  render() {
    console.log(this.props.gifs, 'rendering list');
    return (
      <div className="results-header">
      { this.props.search !== ''?  (
        <h2> Results for <span>{this.props.search} </span></h2>
      ) : undefined
      }

        <ul className="gif-list">
          {this.props.gifs.map((gif) => {
            return (
              <Gif
                key={gif.id}
                url={gif.embed_url}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default GifList;
