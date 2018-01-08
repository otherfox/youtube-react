import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCQCTUS0ohMlJr8eHozsD2p-OTk5Tyh76s';

// Create a new component which creates some HTML

class App extends Componenet {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'surf boards' }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Put component's generate HTML and put on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
