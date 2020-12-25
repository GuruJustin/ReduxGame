import React from 'react';
import logo from './logo.svg';

import bg from '../public/images/background.png';
import sandwatch from '../public/images/sandwatch.png';
import title from '../public/images/SAČEKAJ MALO.png';

import { Counter } from './features/counter/Counter';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage:0,
      loading:true
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      20)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let next = (this.state.percentage + 1) % 100;
    if (next == 0){
      clearInterval(this.timerID);
      this.setState({
        percentage: 100
      });
      return
    }
    console.log(this.state);
    this.setState({
      percentage: next
    });
  }

  render () {
    return (
      <div className="App" style={{backgroundImage : `url(${bg})`}}>
        <div className="Preloading">
          <img src={title}/>
          <div className="Waiting" style={{backgroundImage:`url(${sandwatch})`}}></div>
          {this.state.percentage}%
        </div>
      </div>
    );
  }
}

export default App;


//https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory/44115058#44115058