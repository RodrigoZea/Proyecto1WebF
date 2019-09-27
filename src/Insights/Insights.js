import React, { Component } from 'react'
import '../styles/main.scss'
import InsightCard from '../InsightCard/InsightCard'

class Insights extends React.Component {
    render() {
        return (
            <div className="insightContainer">
                <InsightCard imgPath='../../resources/img/energy.jpg' title="All the Way Up" subtitle="" description="YOU ARE HIGH ENERGY! We can’t seem to find any chill music in your recent streaming history. What’s it like living life at a 10?" />
                <InsightCard imgPath='../../resources/img/gamer.jpg' title="Gamer" subtitle="You Stream Like a" description="Your streaming seems pretty next level. Based on the playlists in your library, we’re guessing that you like to game." />
                <div className="insightClosing">
                    <h3>These are some early guesses based on just a sample of your listening. When we work with our marketing partners, we use the full power of our platform to deliver the right messages to the right audiences.</h3>
                    <h4>To go deeper with these insights, reach out to your friends at Spotify for Brands below.</h4>
                </div>
            </div>
        )
    }
}

export default Insights