import React, { Component } from 'react'
import '../styles/main.scss'


class Contact extends React.Component {
    render() {
        return (
            <div className="contactPage">
                <button className="buttonBase dark">Contact Us</button>
                <button className="buttonBase light">Learn More</button>
            </div>

        )
    }
}

export default Contact