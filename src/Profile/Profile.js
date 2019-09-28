import React, { Component } from 'react'
import '../styles/main.scss'


class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div className="profileContainer">
                <div className="textProfile">
                    <div className="profileName">Rodrigo Zea</div>
                    <div className="profileOptions">
                        <a className="hoverProfile"> Share </a>
                        |
                        <a className="hoverProfile"> Logout </a>
                    </div>
                </div>
                <div>
                    <img className="profilePic" src="../../resources/img/user-placeholder.jpg"></img>
                </div>
            </div>
        )

    }
}

export default Profile