import React, { Component } from 'react'
import '../styles/main.scss'

class GenreDistribution extends React.Component {
    constructor(props) {
        super(props)

        this.textToRender = [
            { textC: 'One', colorC: 'white' },
            { textC: 'of', colorC: 'white' },
            { textC: 'the', colorC: 'white' },
            { textC: 'new', colorC: 'white' },
            { textC: 'streaming', colorC: 'white' },
            { textC: 'habits', colorC: 'white' },
            { textC: "we're", colorC: 'white' },
            { textC: 'measuring', colorC: 'white' },
            { textC: 'is', colorC: 'white' },
            { textC: "listeners'", colorC: 'white' },
            { textC: 'music', colorC: 'white' },
            { textC: 'Diversity.', colorC: 'white' },
            { textC: 'As', colorC: 'white' },
            { textC: 'one', colorC: 'white' },
            { textC: 'component', colorC: 'white' },
            { textC: 'of', colorC: 'white' },
            { textC: 'Diversity,', colorC: 'white' },
            { textC: 'we', colorC: 'white' },
            { textC: 'look', colorC: 'white' },
            { textC: 'at', colorC: 'white' },
            { textC: 'genre.', colorC: 'white' },
            { textC: '28%', colorC: '#1e3264' },
            { textC: 'of', colorC: 'white' },
            { textC: 'your', colorC: 'white' },
            { textC: 'favorites', colorC: 'white' },
            { textC: 'artists', colorC: 'white' },
            { textC: 'are', colorC: 'white' },
            { textC: 'within', colorC: 'white' },
            { textC: 'your', colorC: 'white' },
            { textC: 'most-listened', colorC: 'white' },
            { textC: 'to', colorC: 'white' },
            { textC: 'genre.', colorC: 'white' },
            { textC: 'Did', colorC: 'white' },
            { textC: 'you', colorC: 'white' },
            { textC: 'know', colorC: 'white' },
            { textC: 'there', colorC: 'white' },
            { textC: 'are', colorC: 'white' },
            { textC: 'over', colorC: 'white' },
            { textC: '1,500', colorC: 'white' },
            { textC: 'genres', colorC: 'white' },
            { textC: 'available', colorC: 'white' },
            { textC: 'on', colorC: 'white' },
            { textC: 'Spotify?', colorC: 'white' },
        ]


    }

    render() {
        return (
            <div className="genreDistribution">
                <div className="distributionHeader">
                    <div>You’re all over the place.</div>
                    <div>In the good way.</div>
                </div>
                <div className="distributionAnimation">
                    <div className="svgContainer">
                        <div className="svgLeft" />
                        <div className="svgRight" />
                    </div>
                </div>
                <div className="distributionSubhead">
                    {
                        this.textToRender.map(({ textC, colorC }) => {

                            let divStyle = {
                                color: colorC,
                                display: 'inline-block',
                                paddingRight: '3px'
                            }

                            return (
                                <div style={divStyle}>
                                    {textC}
                                </div>
                            )

                        }
                        )

                    }
                </div>
            </div>
        )
    }
}

export default GenreDistribution