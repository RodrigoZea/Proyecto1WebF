import React, { Component } from 'react'
import '../styles/main.scss'


class Playlist extends React.Component {
    render() {
        return (
            <div className="playlistContainer">
                <div className="playlistBack"></div>
                <div className="playlistLeft">
                    <img src='../../resources/img/playlist.jpg'></img>
                </div>
                <div className="playlistRight">
                    <div className="playlistContent">
                        <h1>Your Spotify.me playlist</h1>
                        <p>We’ve generated a playlist just for you based on your most recent streaming history. Enjoy! And keep scrolling to learn more about how we understand people through music.</p>
                        <div className="playlistButtons">
                            <div className="text">Save to Spotify</div>
                            <div className="textRoll">Save to Spotify</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlist