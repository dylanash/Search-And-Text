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
        <hr/>
        <div className="compare-holder" >
          <TextCompare />
        </div>
      </div>
    );
  }
}
export default App;
