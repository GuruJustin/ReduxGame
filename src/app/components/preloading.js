import React from 'react'

import sandwatch from '../../../public/images/sandwatch.png';
import title from '../../../public/images/SAČEKAJ MALO.png';

import {setPreloading} from '../actions/preloadingAction'
import {connect} from 'react-redux'

class Preloading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percentage:0,
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
    
    preloadingFinish = () => {
        this.props.preloading()
    }

    tick() {
        let next = (this.state.percentage + 1) % 100;
        if (next == 0){
            clearInterval(this.timerID);
            this.setState({  percentage: 100 })
            this.preloadingFinish()
            return
        }
        this.setState({
            percentage: next
        });
    }
    render () {
        return (
            <div className="Preloading">
                <img src={title}/>
                <div className="Waiting" style={{backgroundImage:`url(${sandwatch})`}}></div>
                {this.state.percentage}%
            </div>
        )
    }
}

const mapActionsToProps = {
    preloading : setPreloading   //props actions
}

const mapStateToProps = (state) => {
    return {
        preloading : state.preloadingReducer.preloading
    }
}

export default  connect(mapStateToProps, mapActionsToProps)(Preloading);