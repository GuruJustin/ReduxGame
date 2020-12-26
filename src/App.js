import React from 'react'
import logo from './logo.svg'

import bg from '../public/images/background.png'
import './App.css';

import { Route, Switch} from "react-router-dom";

import LevelMenu from './app/components/levelmenu'
import Startup from './app/components/startup'
import Puzzling from './app/components/puzzling'
import Final from './app/components/final'
import {connect} from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <div className="App" style={{backgroundImage : `url(${this.props.background})`}}>
          <Switch>
              <Route path="/startup" component= {Startup} />
              <Route path="/levelmenu" component= {LevelMenu} />
              <Route path="/puzzling" component= {Puzzling} />
              <Route path="/final" component= {Final} />
          </Switch>
        </div>
    );
  }
}

const mapActionsToProps = {
}

const mapStateToProps = (state) => {
  return {
    background : state.changeBgReducer.background
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App);


//https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory/44115058#44115058