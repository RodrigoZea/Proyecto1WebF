import React, { Component } from 'react';
import '../styles/main.scss';
import Track from '../Track/Track';

class Genres extends React.Component {
    render() {
        return (
            <div className="genreContainer">
                <div className="favoritesContainer">
                    <ul>
                        <li>
                            <a>
                                Energy
                        </a>
                            <div className="bottomBar"></div>
                        </li>
                        <li>
                            <a>
                                Danceability
                        </a>
                            <div className="bottomBar"></div>
                        </li>
                        <li>
                            <a>
                                Valence
                        </a>
                            <div className="bottomBar"></div>
                        </li>
                    </ul>

                </div>

                <div className="tabbedContainer">
                    <div className="genreTitle">
                        <h1>
                            76%
                        </h1>

                        <h1>
                            of your tracks are energetic
                        </h1>
                    </div>

                    <div className="genreDescription">
                        <h2>
                            Pump up the volume
                        </h2>
                    </div>
                </div>

                <div className="trackRow">
                    <Track artist="Caravan Palace" song="Plume" imgPath='../../resources/img/308bdf27d9f3c2eb4976556953051523229c9fa9.jpg' />
                    <Track artist="Friendly Fires" song="Hurting (Tensnake Remix)" imgPath='../../resources/img/3005dfe0d214fa188afb4ec3455c64a4a4311788.jpg' />
                    <Track artist="Gorillaz" song="DARE" imgPath='../../resources/img/b1726c4ceb855e74841bbfe50aaa0c7aec6a54d0.jpg' />
                </div>

            </div>
        );
    }
}

export default Genres;