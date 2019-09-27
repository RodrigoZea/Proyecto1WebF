import React, { Component } from 'react';
import '../styles/main.scss';

class SideNav extends React.Component {


    render() {

        return (
            <div className="sidenav">
                <ul>
                    <li>
                        <a>
                            Contact Us
                        </a>
                        <div className="bottomBar"></div>
                    </li>
                    <li>
                        <a>
                            Listening Insights
                        </a>
                        <div className="bottomBar"></div>
                    </li>
                    <li>
                        <a>
                            Streaming Habits
                        </a>
                        <div className="bottomBar"></div>
                    </li>
                    <li>
                        <a>
                            Your Favorites
                        </a>
                        <div className="bottomBar"></div>
                    </li>
                </ul>
            </div>
        )

    }

}

export default SideNav;