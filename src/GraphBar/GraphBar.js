import React, { Component } from 'react';
import '../styles/main.scss';


class GraphBar extends React.Component {
    render() {
        const widthStyle = {
            width: `${this.props.percentage}`
        }

        return (
            <div className="graphItem">
                <div className="graphGraphTitle">{this.props.genre}</div>
                <div className="graphContainer">
                    <div className="graphOuter">
                        <div className="graphInner" style={widthStyle}></div>
                    </div>
                    <div className="graphPercent">{this.props.percentage}</div>
                </div>
            </div>
        );
    }
}

export default GraphBar;