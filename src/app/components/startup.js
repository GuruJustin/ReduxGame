import React from 'react'

import teacher from '../../../public/images/teacher.png';
import start_title from '../../../public/images/start_title.png';

import start_button from '../../../public/images/START Button.png';
import IZABERI_KVIZ_Button from '../../../public/images/IZABERI KVIZ Button.png';
import { Router, NavLink } from 'react-router-dom';

class Startup extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){}

    render () {
        return (
            <div className="startup">
                <img className="title" src={start_title}/>
                <img className="teacher" src={teacher} />
                <NavLink to="/levelmenu" className="start_button">
                    <img src={start_button} />
                </NavLink>
                <NavLink to="/puzzling" className="menu_button">
                    <img src={IZABERI_KVIZ_Button} />
                </NavLink>
            </div>
        );
    }
}

export default Startup