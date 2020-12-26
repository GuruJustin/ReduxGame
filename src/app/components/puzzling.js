import React from 'react'

import '../../../public/css/puzzling.css';

class Puzzling extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){}

    render () {
        return (
            <div className = "puzzling_container">
                <div className="puzzling_header"></div>
                <div className="puzzling">
                    <div className = "puzzling_board">
                        <div className = "formula">
                            <div className="problem">10- (7-3) =&nbsp;</div>
                            <input className ="result"></input>
                        </div>
                        <a className="next_button"></a>
                    </div>
                    <div className = "puzzling_result">
                        <div className="reulst_bg success_bg"></div>
                        <div className="reulst_bg success_bg"></div>
                        <div className="reulst_bg failed"></div>
                        <div className="reulst_bg"></div>
                        <div className="reulst_bg"></div>
                        <div className="reulst_bg"></div>
                        <div className="reulst_bg"></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Puzzling