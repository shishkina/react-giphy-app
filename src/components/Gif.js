import React, { Component } from 'react';
import GifModal from './GifModal';
import GifView from './GifView';

class Gif extends Component {
/*
  Modal functionality works, but not used at the moment,
  but I'm still deciding what's the best way to display the results:
  1. modal view, or 2.just render the  gifs
  Will update soon
*/
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.url === this.props.url);
  }

  openModal() {
    this.setState({
      modalOpen: true,
    })
  }
  closeModal() {
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    return (
      <div>
        { this.state.modalOpen ?
          <GifModal
            closeModal={this.closeModal}
            url={this.props.url} />
          : undefined
        }
        <GifView
          openModal={this.openModal}
          url={this.props.url}
        />
      </div>
    );
  }
}

export default Gif;
