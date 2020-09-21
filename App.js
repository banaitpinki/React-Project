import  React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
    <div class="row">
      <div class="col-md-12">
        <ul class="stepper-horizontal">
          <li class="active">
              First step
          </li>
          <li >
              Second step
          </li>
          <li>
            Third step
          </li>
        </ul>
      </div>
    </div>
  );
}
}

export default App;
