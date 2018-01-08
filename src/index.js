import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCQCTUS0ohMlJr8eHozsD2p-OTk5Tyh76s';
YTSearch({ key: API_KEY, term: 'surf boards' }, function(data) {
  console.log(data);
});

// Create a new component which creates some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put component's generate HTML and put on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
