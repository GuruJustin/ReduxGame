import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


import {changeBackground} from '../actions/changeBgAction'


import '../../../public/css/final.css';
import end_bg from '../../../public/images/end_background.png'
import start_bg from '../../../public/images/background.png'


class Final extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.setBackground(end_bg);
    }
    componentWillUnmount(){
        this.props.setBackground(start_bg);
    }

    render () {
        return (
            <div className="final_container">
                <div className = "final_header">
                    BRAVO!
                </div>
                <div className = "final_trophy">
                    <div className = "content">
                        TVOJA OCJENA
                    </div>
                    <div className = "mark">
                        5+
                    </div>
                </div>
                <Link to="/levelmenu" className = "final_submit"><img /></Link>
            </div>
        );
    }
}

const mapActionsToProps = {
    setBackground : changeBackground
}

const mapStateToProps = (state) => {
}

export default connect(null, mapActionsToProps)(Final)