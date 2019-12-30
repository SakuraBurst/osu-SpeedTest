import React from 'react';
class MainApp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          timerOn: false,
          timerStart: 0,
          timerTime: 0,
          clickNumbers: 0,
          fitstButton: "",
          secondButton: "",
          streamTest1: '',
          testState: false
      }
      
      this.switch = this.switch.bind(this)
      this.firstButtonSeter = this.firstButtonSeter.bind(this);
      this.secondButtonSeter = this.secondButtonSeter.bind(this);
      this.numberOfClicksSeter = this.numberOfClicksSeter.bind(this)
      this.handleKeyPress = this.handleKeyPress.bind(this)
      //this.setStateTest = this.setStateTest.bind(this)
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
    }
    //https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2
    startTimer(){
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            })
        }, 10);
    }
    stopTimer(){
        this.setState({
            timerOn: false
        })
        clearInterval(this.timer)
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
    switch(){
        this.setState((state) => ({
            testState: !state.testState
        }))
        /*let sec = 0;
        let timer = setInterval(() => {
        sec++
        
        if (sec == clickNumbers){
            clearInterval(timer)
        }
        }, 1000);
        
        this.setState({
            timerTest: sec
        })*/
    }

    handleKeyPress(event){
        this.startTimer()
        if(event.key == this.state.fitstButton || event.key == this.state.secondButton){
            this.setState({
                streamTest1: this.state.streamTest1 + event.key
            })
        }
        
    }
  
    //setStateTest(){
        //this.setState({
            //streamTest1: "u"
        //})
    //}
    
    render(){
        if(this.state.testState){
            document.addEventListener("keydown", this.handleKeyPress); 
        }
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
              {this.state.timerOn ? <button onClick={this.stopTimer}>Stop</button> : <button onClick={this.switch}>Start</button>}
              <h2>Your result</h2>
              <p>Tap Speed: {this.state.fitstButton} taps/{this.state.timerTime} seconds</p>
              <p>Stream Speed: {this.state.streamTest1}</p>
          </div>
      );
    }
  }
export{ MainApp}