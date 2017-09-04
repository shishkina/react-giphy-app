import React, { Component } from 'react';
import GifList from './components/GifList';
import AddTextForm from './components/AddTextForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: 'hello, YOU!',
      inputText: '',
      searchGifs: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.getGifs = this.getGifs.bind(this);
  }
  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }
  handleInputSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputText, 'in submit');
    this.getGifs();
    console.log(this.state, 'after api call');
  }

  getGifs() {
    console.log('in getGifs');
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputText}?&api_key=placeholder&limit=5`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'GET',
      },
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          searchGifs: json.data,
        });
      });
  }
  componentDidMount() {
    console.log('DID mount');
  }

  render() {
    console.log('rendering APPs state', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddTextForm
          inputText={this.state.inputText}
          handleInputChange={this.handleInputChange}
          handleInputSubmit={this.handleInputSubmit}
          />
        <GifList
          gifs={this.state.searchGifs}
          search={this.state.inputText}
          />
      </div>
    );
  }
}

export default App;
