import React, { Component } from 'react'
import '../styles/main.scss'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
var favoritesOne = require('../../resources/img/66ec50acc8815eb6c050ac3584998ebca678acb8.jpg')
var favoritesTwo = require('../../resources/img/1a9dab25976c706fffccb6bf2cf8a6f5eadd0d29.jpg')

class Favorites extends React.Component {
    render() {
        return (
            <div className="trackContainer">
                <div className="favoritesContainer">
                    <ul>
                        <li>
                            <a>
                                Spotify Lifetime
                            </a>
                            <div className="bottomBar"></div>
                        </li>
                        <li>
                            <a>
                                Recent Listening
                            </a>
                            <div className="bottomBar"></div>
                        </li>
                    </ul>

                </div>

                <div className="tabbedContainer">
                    <FavoriteCard artist="Gorillaz" song="Feel Good Inc." topText="Your Top Artist" imgPath={favoritesOne} classN="cardBase right" />
                    <FavoriteCard artist="Daft Punk" song="Digital Love" topText="Your Top Track" imgPath={favoritesTwo} classN="cardBase left" />
                </div>

            </div>
        )
    }
}

export default Favorites