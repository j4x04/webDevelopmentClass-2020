import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Agestatement from './Agestatement.js';

let counter = 0; 
let ageString = "";
function agecalculations() {
  let q = new Date(); // new date object
  var temp = 0;
  //console.log(q.getMonth());
  if(q.getMonth()<5) { // if month is before june (1st) (birthday), subtract age by 1
    temp = 1;
  } 
  ageString = q.getFullYear()-2004-temp; // age declaration
}




class App extends React.Component {
  constructor(props) {
    super(props);
  }



 

  componentWillMount() {
    console.log("will mount!!");
    agecalculations();
  }
  /*
  componentDidMount() {
    this.Q = setInterval( () => this.update(), 1000);
  }*/



  componentWillReceiveProps() {
    console.log("props!!");
  }

  componentWillUpdate() {
    console.log("will update!!!");
  }

  componentDidUpdate() {
    console.log("updated!!");
  }



/*
  update() {
    counter += 1;
    this.setState({Q: counter});
  }
  */

  render() {
    return (
      <div>


<header>
    <nav class="nav">
          <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </ul>
    </nav>
  </header>

        <link href="https://fonts.googleapis.com/css2?family=Blinker&display=swap" rel="stylesheet"></link>
      
        <div class = "title">
          <h1>Leo Zhang</h1>
          <div class = "description">
            <Agestatement age = {ageString}/>
            <p>Attending Upper Canada College</p>
            <p class = "bottom">Toronto, Canada</p>
          </div>
        </div>
        

      <div class = "rows">
        <div class = "links">
          <a href = "https://github.com/j4x04/webDevelopmentClass-2020">Github</a>
          <a href = "https://google.com">Instagram</a>
          <a href = "https://google.com">Facebook</a>
        </div>


        <div class = "bio">
          <p>Hello! I am Leo Zhang, currently a high school student who is attending Upper Canada College in Toronto, Ontario.
            i am interested in taking Computer science and engineering in University, and explore any similar fields. 
            My experience in computer science consists of some python, (web development including HTML and CSS), and  
            Java from the AP Computer Science A course. </p>
        </div>

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