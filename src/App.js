import React from 'react'
import logo from './logo.svg'

import bg from '../public/images/background.png'
import Preloading from './app/components/preloading.js'
import Startup from './app/components/startup.js'
import './App.css';
import {connect} from 'react-redux'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      preloading : this.props.preloading
    })
  }

  render () {
    const {preloading} = this.props;
    return (
      <div className="App" style={{backgroundImage : `url(${bg})`}}>
        { preloading  
          ? <Preloading ></Preloading> 
          : <Startup></Startup>
        }

        {preloading}
      </div>
    );
  }
}

const mapActionsToProps = {
}

const mapStateToProps = (state) => {
  return {
    preloading : state.preloadingReducer.preloading
  }
}

export default  connect(mapStateToProps, mapActionsToProps)(App);


//https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory/44115058#44115058