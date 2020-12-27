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

    componentDidMount(){
    }

    componentWillMount() {
        this.setState({
            preloading : this.props.preloading
        })
    }

    specifySystem() {
        var OSName="Unknown OS"; 
        if (navigator.appVersion.indexOf("Win")!=-1) return false
        return true
    }
    
    render () {
        const {preloading} = this.props
        const mac = this.specifySystem()
        return (
            <div>
                {
                    preloading  
                    ? <Preloading /> 
                    : <div className="startup">
                        <img className="title" src={start_title}/>
                        <img className="teacher" src={teacher} />
                        {
                            mac
                            ?   <Link to="/levelmenu" className="start_button" style ={{paddingTop: '13px'}}>START!</Link>
                            :   <Link to="/levelmenu" className="start_button">START!</Link>
                        }
                        {
                            mac
                            ?   <Link to="/puzzling" className="menu_button" style ={{paddingTop: '7px'}}>IZABERI KVIZ</Link>
                            :   <Link to="/puzzling" className="menu_button">IZABERI KVIZ</Link>
                        }
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