import React, { Component } from 'react'
import '../styles/main.scss'

class SideNav extends React.Component {
    constructor(props) {
        super(props)

        this.navList = [
            { ref: 'contactUs', textF: 'Contact Us', section: 'contact' },
            { ref: 'listeningInsights', textF: 'Listening Insights', section: 'insights' },
            { ref: 'streamingHabs', textF: 'Streaming Habits', section: 'habits' },
            { ref: 'yourFavorites', textF: 'Your Favorites', section: 'favorites' }
        ]


    }

    render() {
        const { activeSection } = this.props

        return (
            <div className="sidenav">
                <ul>
                    {
                        this.navList.map(({ ref, textF, section }) => {

                            return (
                                <li className={`${(section === activeSection) ? 'active' : ' '}`}>
                                    <a href={`#${ref}`}>
                                        {textF}
                                    </a>
                                    <div className={`${(section === activeSection) ? 'bottomBar active' : ' '}`}></div>
                                </li>
                            )

                        }
                        )

                    }
                </ul>
            </div>
        )

    }

}

export default SideNav