import React, { Component } from 'react';
import Login from './Login/Login';

// import Favorites from './Home/Favorites'
import Search from './Home/Search'
import Filter from './Home/FilterJobs'


class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Search/>
        <Filter/>
      </div>
      
    );
  }
}

export default App;
