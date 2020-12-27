import React from 'react'
import { Link } from 'react-router-dom';

import '../../../public/css/puzzling.css';

class Puzzling extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
    }

    render () {
        return (
            <div className = "puzzling_container">
                <div className="puzzling_header"><p><strong>Kviz 4</strong> Ponavljanje sabiranja i oduzimanja u prvoj desetici. Ukucaj tačan odgovor i klikni na “Dalje”.</p></div>
                <div className="puzzling">
                    <div className = "puzzling_board">
                        <div className = "formula">
                            <div className="problem">10-(7-3) =&nbsp;</div>
                            <input className ="result"></input>
                        </div>
                        <Link to="/final" className = "next_button">Dalje</Link>
                    </div>
                    <div className = "puzzling_result">
                        <div className="result_bg success_bg"></div>
                        <div className="result_bg success_bg"></div>
                        <div className="result_bg failed_bg"></div>
                        <div className="result_bg"></div>
                        <div className="result_bg"></div>
                        <div className="result_bg"></div>
                        <div className="result_bg"></div>
                        <div className="result_bg"></div>
                        <div className="result_bg"></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Puzzling