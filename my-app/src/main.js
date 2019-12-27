import React from 'react';
class MainApp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          timerTest: 0,
          clickNumbers: 0,
          fitstButton: "",
          secondButton: ""
      }
      //this.timer = this.timer.bind(this)
      this.firstButtonSeter = this.firstButtonSeter.bind(this);
      this.secondButtonSeter = this.secondButtonSeter.bind(this);
      this.numberOfClicksSeter = this.numberOfClicksSeter.bind(this)
    }
    firstButtonSeter(e){
        this.setState({
            fitstButton: e.target.value
        })
    }
    secondButtonSeter(e){
        this.setState({
            secondButton: e.target.value
        })
    }
    numberOfClicksSeter(e){
        this.setState({
            clickNumbers: e.target.value
        })
    }
    /*timer(state){
        let clickNumbers = 15
        let sec = 0;
        let timer = setInterval(() => {
        sec++
        console.log(sec)
        if (sec == clickNumbers){
            clearInterval(timer)
        }
        }, 1000);
        
        this.setState({
            timerTest: sec
        })
    }*/
    render(){
      return(
          <div className="Osnova">
              <h3>OSU SPEED TEST</h3>
              <p>key 1</p>
              <input type="text" 
                    maxlength="1" 
                    value={this.state.fitstButton}
                    onChange={this.firstButtonSeter}/>
              <p>key 2</p>
              <input type="text" 
                    maxlength="1"
                    value={this.state.secondButton}
                    onChange={this.secondButtonSeter}/>
              <p>Number of clicks</p>
              <input type="number"
                    value={this.state.clickNumbers}
                    onChange={this.numberOfClicksSeter} />
              <br/>
              <button onClick={this.timer}>Start</button>
              <h2>Your result</h2>
              <p>Tap Speed: {this.state.fitstButton}/{this.state.secondButton}</p>
              <p>Stream Speed: {this.state.timerTest}</p>
          </div>
      );
    }
  }
export{ MainApp}