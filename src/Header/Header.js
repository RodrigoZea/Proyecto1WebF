import React, { Component } from 'react'
import '../styles/main.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div className={this.props.nameC} id={this.props.idName}>
                <div className="header">
                    <h1>{this.props.h1Text}</h1>
                    <h2>{this.props.h2Text}</h2>
                </div>
            </div>
        )

    }
}

export default Header
