import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { sampleAction } from './actions/sampleAction'
import Agestatement from './components/Agestatement.js';
import axios from 'axios';
import { connect } from 'react-redux';
import weatherApi from "./api/weatherApi"
import { sampleReducer } from './reducers/SampleReducer.js'
import Router from './router'


// AGE AUTO UPDATE
let counter = 0; 
let ageString = "";
function agecalculations() {
  let q = new Date(); // new date object
  var temp = 0;
  //console.log(q.getMonth());
  if(q.getMonth() < 5) { // if month is before june (1st) (birthday), subtract age by 1
    temp = 1;
  } 
  ageString = q.getFullYear() - 2004 - temp; // age declaration
}




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      weather: null,
      quote: null,
    }
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














getQuote = () => {
  const q = this;
  axios.get('http://quotes.stormconsultancy.co.uk/random.json')
  .then(function (response) {
    // handle success
    //console.log(response);
    const qstr = `${response.data.quote} - ${response.data.author}`;
    q.setState({quote: qstr});

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}




onWeatherClicked = () => {
  const q = this;
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=0750754af31f0eb78cfa44d9a031f4e1')
  .then(function (response) {
    // handle success
    //console.log(response);
    const weatherStr = `${response.data.weather[0].main} - ${response.data.weather[0].description}`;
    q.setState({weather: weatherStr});

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}



onWeatherClickedRedux = () => {
  this.props.sampleAction();
}








/*
  update() {
    counter += 1;
    this.setState({Q: counter});
  }
  */




  /*
    navbar, replaced by router

    <nav class="nav">
          <ul>
            <a href="https://google.com">Home</a>
            <a href="https://facebook.com/">About</a>
            <a href="#">Link 2</a>
          </ul>
    </nav>

  */

  render() {
    const {weather, quote} = this.state;
    const { sampleState } = this.props.counterVal;
    return ( 
      <div className="App">
        


<header>



<Router/>



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
      
      

      <div class = "apistuff">
        <div>Weather in toronto is: {sampleState}</div>
        <div onClick ={() => this.onWeatherClickedRedux()}>click to get weather :) </div>

      <br></br>

      <div>Your random quote is: {quote}</div>
      <div onClick ={() => this.getQuote()}>click to get quote :p </div>





      </div>









      </div>
    );
  }
}


const mapStateToProps = ({ sampleReducer }) => ({
  counterVal: sampleReducer
});
export default connect(mapStateToProps, {sampleAction})(App);


/*
FEEDBACK
- too many empty lines
- variable naming appropriate
- spacing standards (put space before/after operator)
- airbnb standard eslint, prettier automatically formats
- indentation
- className vs class (react)
*/