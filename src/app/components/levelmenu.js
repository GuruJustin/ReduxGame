import React from 'react'
import { Link } from 'react-router-dom';

import '../../../public/css/levelmenu.css';

class LevelMenu extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){}

    render () {
        let menus = [
            {
                gold: true,
                level : 1,
                activate : true
            },
            {
                gold: false,
                level : 2,
                activate : true
            },
            {
                gold: false,
                level : 3,
                activate : true
            },
            {
                gold: false,
                level : 4,
                activate : true
            },
            {
                gold: false,
                level : 5,
                activate : false
            },
            {
                gold: false,
                level : 6,
                activate : false
            },
            {
                gold: false,
                level : 7,
                activate : false
            },
            {
                gold: false,
                level : 8,
                activate : false
            },
            {
                gold: false,
                level : 9,
                activate : false
            },
        ]
        return (
            <div className="levelmenu">
                <div className="header"></div>

                <div className="level-menus">
                    {menus.map(function(item){
                        if (item.gold)
                            return <Link to="/puzzling" className="level-each-menu golden" id = {item.key}>{item.level}</Link>;
                        else if (item.activate)
                            return <Link to="/puzzling" className="level-each-menu activate" id = {item.key}>{item.level}</Link>;
                        else 
                            return <div className="level-each-menu deactivate" id = {item.key}>{item.level}</div>;
                    })}
                </div>

                <div className="footer"></div>
            </div>
        );
    }
}

export default LevelMenu