import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import {changeBackground} from '../actions/changeBgAction'

import '../../../public/css/end.css';
import end_bg from '../../../public/images/end_background.png'
import start_bg from '../../../public/images/background.png'


class EndComponent extends React.Component {

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
            <div className="end_container">
                <div className = "end_header">
                    BRAVO!
                    <p>KVIZ 6 JE SAVLDAN!</p>
                </div>

                <div className = "end_mark">
                    <div className = "content">
                        TVOJA OCJENA
                    </div>
                    <div className = "mark">
                        5+
                    </div>
                </div>
                <Link to="/final" className = "end_submit">Dalje</Link>
            </div>
        );
    }
}

const mapActionsToProps = {
    setBackground : changeBackground
}

const mapStateToProps = (state) => {
}

export default connect(null, mapActionsToProps)(EndComponent)