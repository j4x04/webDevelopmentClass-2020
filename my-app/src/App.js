import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


let counter = 0;

class App extends React.Component {
  constructor(props) {
    
    super(props);

    this.state = {
      Q: counter
    };

  }



  componentWillMount() {
    console.log("will mount!!");
  }
  
  componentDidMount() {
    this.Q = setInterval( () => this.update(), 1000);
  }



  componentWillReceiveProps() {
    console.log("props!!");
  }

  componentWillUpdate() {
    console.log("will update!!!");
  }

  componentDidUpdate() {
    console.log("updated!!");
  }




  update() {
    counter += 1;
    this.setState({Q: counter});
  }
  

  render() {
    return (
      <div>
        <h1>This is homework for Session 2!</h1>
        <h1>Counting by 2s: {this.state.Q}.</h1>
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;