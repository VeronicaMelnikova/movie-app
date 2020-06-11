import React, { Component} from "react";
import PageMain from './components/main/main';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
        <PageMain></PageMain>
      </div>
    );
  }
}

export default App;