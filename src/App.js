import React from 'react';
import Header from './Header';
import Search from './Search';
import TextCompare from './TextCompare';

/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="outermost" >
        <div className="head-holder">
          <Header />
        </div>
        <div className="search-holder">
          <Search />
        </div>
        <div>
          <TextCompare />
        </div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default App;
