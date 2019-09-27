import React, { Component } from 'react';
import '../styles/main.scss';

class Track extends React.Component {
    render() {
        const image = {
            backgroundImage: `url(${this.props.imgPath})`,
            zIndex: '3'
        }

        return (
            <div className="track">
                <div className="trackImage" style={image}>
                </div>
                <div className="audioPlayer">
                    <div className="playButton">
                        <svg id="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235.592 235.592"><path d="M117.795.002C52.843.002 0 52.844 0 117.795 0 182.747 52.843 235.59 117.795 235.59c64.953 0 117.797-52.843 117.797-117.795 0-64.95-52.844-117.793-117.797-117.793zm0 220.588C61.113 220.59 15 174.477 15 117.795c0-56.68 46.113-102.793 102.795-102.793 56.683 0 102.797 46.112 102.797 102.793 0 56.682-46.115 102.795-102.797 102.795z" className="button-circle"></path> <path d="M95.8 68.3c-4.1 0-7.5 3.4-7.5 7.5v84.1c0 4.1 3.4 7.5 7.5 7.5 3.2 0 55.4-29 78.1-41.7 4.7-2.6 4.8-9.3.2-12C151.5 99.9 99 68.3 95.8 68.3z"></path></svg>
                    </div>
                    <div className="playInfo">
                        <div className="playSong">
                            {this.props.song}
                        </div>
                        <div className="playArtist">
                            {this.props.artist}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Track;