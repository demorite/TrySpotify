import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from '../../store'
import Main from '../../components/main/main'
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
          <div>
            <Route component={Main}/>
          </div>
      </BrowserRouter>
    </Provider>;
  }
}

export default App;
