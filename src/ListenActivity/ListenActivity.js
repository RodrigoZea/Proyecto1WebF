import React, { Component } from 'react'
import '../styles/main.scss'
var lineChartF = require('../../resources/img/line_chart.png')

class ListenActivity extends React.Component {
    render() {
        return (
            <div className="trends">
                <div className="time">
                    <img className="lineChart" src={lineChartF}></img>
                </div>

                <div className="trendsUsage">
                    <div className="trendsHour">
                        <h1>1:00
                            <span>
                                am
                            </span>
                        </h1>
                        <p>
                            <div>
                                Most active hour
                            </div>
                            <span>
                                (America/Guatemala)
                            </span>
                        </p>
                    </div>
                    <div className="divisor">
                    </div>
                    <div className="trendsMins">
                        <h1>1,330
                        <span>
                                min
                        </span>
                        </h1>
                        <p>
                            Streamed since August 13
                        </p>

                    </div>
                </div>

            </div>

        )
    }
}

export default ListenActivity