import React, { Component } from 'react';
import GifList from './components/GifList';
import AddTextForm from './components/AddTextForm';
import RandomGifView from './components/RandomGifView';
import Loading from './components/Loading';
import Footer from './components/Footer';
import GIPHY_KEY from './key';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      numberOfGifs: '',
      apiDataLoaded: false,
      searchGifs: [],
      random: {},
      randomLoaded: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumberOfGifsChange = this.handleNumberOfGifsChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({inputText: event.target.value});
  }
  handleNumberOfGifsChange(event) {
    this.setState({numberOfGifs: event.target.value})
  }
  handleInputSubmit(event) {
    event.preventDefault();
    this.getGifs();
  }

  getGifs() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputText}?&api_key=${GIPHY_KEY}&limit=${this.state.numberOfGifs}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(response => {
        return response.json()
        .then(data => {
          if (response.ok) {
            this.setState({
              searchGifs: data.data,
              apiDataLoaded: true,
              randomLoaded: false,
            });
          } else {
            return Promise.reject({status: response.status, data});
          }
        });
      })
  }
  componentDidMount() {
    console.log('DID mount');
    fetch(`http://api.giphy.com/v1/gifs/search?q=kittens?&api_key=${GIPHY_KEY}&limit=1`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'accept': 'image/*',
      },
    })
    .then(response => {
      return response.json()
    })
    .then((gif) => {
      console.log(gif);
        this.setState({
          random: gif.data[0],
          randomLoaded: true,
        })
    });
  }

  render() {
    console.log('rendering APPs state', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to Giphy App </h2>
        </div>
        <AddTextForm
          inputText={this.state.inputText}
          numberOfGifs={this.state.numberOfGifs}
          handleNumberOfGifsChange={this.handleNumberOfGifsChange}
          handleInputChange={this.handleInputChange}
          handleInputSubmit={this.handleInputSubmit}
          />
          <GifList
            gifs={this.state.searchGifs}
            search={this.state.inputText}
          />
          {this.state.randomLoaded ?
            <RandomGifView gif={this.state.random} />
          : <Loading />}
          <Footer />
      </div>
    );
  }
}

export default App;
