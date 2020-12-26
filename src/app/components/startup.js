import React from 'react'
import {connect} from 'react-redux'


import teacher from '../../../public/images/teacher.png';
import start_title from '../../../public/images/start_title.png';
import start_button from '../../../public/images/START Button.png';
import IZABERI_KVIZ_Button from '../../../public/images/IZABERI KVIZ Button.png';
import Preloading from './preloading.js'
import { Link } from 'react-router-dom';

class Startup extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){}

    componentWillMount() {
        this.setState({
            preloading : this.props.preloading
        })
    }
    
    render () {
        const {preloading} = this.props;
        return (
            <div>
                {
                    preloading  
                    ? <Preloading /> 
                    : <div className="startup">
                        <img className="title" src={start_title}/>
                        <img className="teacher" src={teacher} />
                        <Link to="/levelmenu" className="start_button">
                            <img src={start_button} />
                        </Link>
                        <Link to="/puzzling" className="menu_button">
                            <img src={IZABERI_KVIZ_Button} />
                        </Link>
                    </div>
                }
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

export default  connect(mapStateToProps, mapActionsToProps)(Startup);