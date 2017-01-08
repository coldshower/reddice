import React from 'react';
import Greetings from './Greetings';
import NavBar from './NavBar';

class App extends React.Component {

  render () {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;