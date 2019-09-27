import React, { Component } from 'react'
import '../styles/main.scss'

class InsightCard extends React.Component {
    render() {
        return (
            <div className="insightContainer">
                <div className="insightCard">
                    <img src={this.props.imgPath}></img>
                    <div className="insightInfo">
                        <h2>{this.props.subtitle}</h2>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InsightCard