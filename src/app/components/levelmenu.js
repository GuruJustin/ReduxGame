import React from 'react'

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
                    {menus.map(function({gold, level, activate}){
                        if (gold)
                            return <a className="level-each-menu golden">{level}</a>;
                        else if (activate)
                            return <a className="level-each-menu activate">{level}</a>;
                        else 
                            return <a className="level-each-menu deactivate">{level}</a>;
                    })}
                </div>

                <div className="footer"></div>
            </div>
        );
    }
}

export default LevelMenu