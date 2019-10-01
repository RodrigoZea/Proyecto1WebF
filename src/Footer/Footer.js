import React, { Component } from 'react'
import '../styles/main.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer className="finalFooter">
                <div className="footerLeft">
                    <div className="arrowDown"></div>
                    <select className="selectOptions">
                        <option>English</option>
                        <option>Deutsch</option>
                        <option>British English</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Italiano</option>
                        <option>Português - Brasil</option>
                        <option>日本語</option>
                        <option>繁體中文</option>
                    </select>
                </div>

                <div className="footerRight">
                    <span className="copyright">© 2018 Spotify AB</span>
                    <a>Legal</a>
                    <a className="aboutText">About</a>
                </div>
            </footer>
        )
    }
}

export default Footer