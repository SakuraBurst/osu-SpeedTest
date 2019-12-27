import React from 'react';
function Mocha(){
    return(
        <p>mocha</p>
    )
}

class MainApp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          clickNumbers: 0,
          fitstButton: "",
          secondButton: ""
      }
    }
    render(){
      return(
          <div className="Osnova">
              <h3>OSU SPEED TEST</h3>
              <p>key 1</p>
              <input type="text" />
              <p>key 2</p>
              <input type="text" />
              <p>Number of clicks</p>
              <input type="number" />
              <br/>
              <button>Start</button>
              <h2>Your result</h2>
              <p>Tap Speed: {}/{}</p>
              <p>Stream Speed: {}</p>
          </div>
      );
    }
  }
export{ Mocha, MainApp}