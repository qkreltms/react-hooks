import React from 'react';
import './App.css';

class App extends React.Component<{}, {}> {
  state = {
    count: 0
  };

  private modify = (n: number) => (e: React.MouseEvent) => {
    this.setState({
      count: n
    });
  }

  public render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <div>{count}</div>
        <button onClick={this.modify(count+1)}>Increment</button>
      </React.Fragment>
    );
  }
}

export default App;
