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
      <div class = "general">
        <link href="https://fonts.googleapis.com/css2?family=Blinker&display=swap" rel="stylesheet"></link>
      
        <div class = "title">
          <h1>Leo Zhang</h1>
          <div class = "description">
            <p class = "top">16 years old</p>
            <p>Grade 11</p>
            <p>Attending Upper Canada College</p>
            <p class = "bottom">Toronto, Canada</p>
          </div>
        </div>
        

        <div class = "links">
          <a href = "https://github.com/j4x04/webDevelopmentClass-2020">Github</a>
          <a href = "https://www.instagram.com/leo__jxz/">Instagram</a>
          <a href = "https://www.facebook.com/leojxzhangg">Facebook</a>
        </div>





      <br></br>



      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;