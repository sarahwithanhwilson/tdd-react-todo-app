import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <h1>TDD Todo App</h1>
    );
  }
};

export default App;