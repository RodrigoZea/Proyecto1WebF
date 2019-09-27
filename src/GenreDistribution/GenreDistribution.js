import React, { Component } from 'react';
import '../styles/main.scss';

class GenreDistribution extends React.Component {
    render() {
        return (
            <div className="genreDistribution">
                <div className="distributionHeader">
                    <div>You’re all over the place.</div>
                    <div>In the good way.</div>
                </div>
                <div className="distributionAnimation">
                    <div className="svgPrueba">
                    </div>
                </div>
                <div className="distributionSubhead">
                    One of the new streaming habits we’re measuring is listeners’ music Diversity. As one component of Diversity, we look at genre. 28% of your favorite artists are within your most-listened to genre. Did you know there are over 1,500 genres available on Spotify?
                </div>
            </div>
        );
    }
}

export default GenreDistribution;