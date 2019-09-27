import React, { Component } from 'react'
import '../styles/main.scss'

import Header from '../Header/Header'
import Favorites from '../Favorites/Favorites'
import ListenActivity from '../ListenActivity/ListenActivity'
import Genres from '../Genres/Genres'
import TopGenre from '../TopGenre/TopGenre'
import GenreDistribution from '../GenreDistribution/GenreDistribution'
import Insights from '../Insights/Insights'
import Playlist from '../Playlist/Playlist'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

class MainContainer extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Header h1Text="Let’s Start With Your Favorites" h2Text="Get ready to feel cool. Or much less cool than you thought." />
                <Favorites />

                <Header h1Text="Here’s When You Listen" h2Text="Based on your most recent 400 streams since August 12" />
                <ListenActivity />

                <Header h1Text="Here’s How You Listen" h2Text="Let’s break it down." />
                <Genres />
                <TopGenre />
                <GenreDistribution />

                <Header h1Text="You Are What You Stream" h2Text="We're constantly learning more about people based on how they stream. This next section is an early peek at our latest streaming intelligence. Based on just a snapshot of your listening, here’s what we’re starting to see." />
                <Insights />
                <Playlist />

                <Header h1Text="Building a People-Based Marketing Strategy?" h2Text="Now that you know how you stream, find out how your audience streams. Head to Spotify for Brands to check out our new research, Understanding People Through Music, which connects our streaming data with offline behaviors to help you understand your audience." />
                <Contact />

            </div>
        )
    }
}

export default MainContainer