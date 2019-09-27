import React, { Component } from 'react'
import '../styles/main.scss'
import GraphBar from '../GraphBar/GraphBar'

class TopGenre extends React.Component {
    render() {
        return (
            <div className="topGenre">
                <div className="genreLeft">
                    <div className="genreInsight">
                        <div>Your top genre is</div>
                        <div>Pop</div>
                        <div>which appears in</div>
                        <div>28%</div>
                        <div>of your top tracks.</div>
                    </div>
                </div>


                <div className="genreRight">
                    <GraphBar genre="Pop" percentage="28%" />
                    <GraphBar genre="Rap" percentage="28%" />
                    <GraphBar genre="Hip Hop" percentage="26%" />
                    <GraphBar genre="Pop Rap" percentage="24%" />
                    <GraphBar genre="Edm" percentage="22%" />
                    <GraphBar genre="Indie Pop" percentage="16%" />
                </div>
            </div>
        )
    }
}

export default TopGenre