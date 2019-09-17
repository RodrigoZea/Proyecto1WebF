import React from "react";
import ReactDOM from "react-dom";
import './styles/main.scss';

function App() {

    return (
        <div>
            <Navbar />
            <SideNav />
            <MainContainer />
        </div>
    );
};

class MainContainer extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Header />
                <Favorites />
                <FavoriteCard artist="Gorillaz" song="Feel Good Inc." topText="Your Top Artist" imgPath='../../resources/img/66ec50acc8815eb6c050ac3584998ebca678acb8.jpg' classN="cardBase right" />
                <FavoriteCard artist="Daft Punk" song="Digital Love" topText="Your Top Track" imgPath='../../resources/img/1a9dab25976c706fffccb6bf2cf8a6f5eadd0d29.jpg' classN="cardBase left" />
            </div>
        );
    }
}
class Navbar extends React.Component {
    render() {
        return (
            <nav className="horizontalNavbar">
                <div className="navMainContainer">
                    <svg id="sfb-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.1 76.3"><path d="M245.3 55.8c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.8-4.2 4.2-4.2 2.3 0 4.1 1.9 4.1 4.1-.1 2.3-1.9 4.2-4.2 4.2m0-7.9c-2.1 0-3.7 1.7-3.7 3.8 0 2.1 1.6 3.7 3.7 3.7s3.7-1.7 3.7-3.8c0-2-1.6-3.7-3.7-3.7m.9 4.2l1.2 1.6h-1l-1.1-1.5h-.9v1.5h-.8v-4.4h1.9c1 0 1.7.5 1.7 1.4 0 .8-.4 1.2-1 1.4m-.7-2h-1.1v1.4h1.1c.5 0 .9-.3.9-.7 0-.4-.3-.7-.9-.7M324.1 55.8V21.1H335c6.4 0 10.6 3.6 10.6 9.3 0 3.5-1.9 6.3-5 7.6 3.6 1 6.1 4.5 6.1 8.4 0 5.5-4.4 9.4-10.7 9.4h-11.9zm11.5-3c4.6 0 7.7-2.6 7.7-6.6 0-3.9-2.8-6.5-7-6.5h-8.9v13.1h8.2zm.1-16c3.7 0 6.4-2.6 6.4-6.2 0-4.1-2.8-6.5-7.5-6.5h-7.3v12.7h8.4zM38.1 0C17.1 0 0 17.1 0 38.1c0 21.1 17.1 38.1 38.1 38.1 21.1 0 38.1-17.1 38.1-38.1.1-21-17-38.1-38.1-38.1m17.5 55c-.7 1.1-2.1 1.5-3.3.8-9-5.5-20.2-6.7-33.5-3.7-1.3.3-2.6-.5-2.8-1.8-.3-1.3.5-2.6 1.8-2.8 14.5-3.3 27-1.9 37 4.2 1.2.7 1.5 2.2.8 3.3m4.7-10.4c-.9 1.4-2.7 1.8-4.1 1-10.2-6.3-25.9-8.1-38-4.4-1.6.5-3.2-.4-3.7-2s.4-3.2 2-3.7c13.8-4.2 31.1-2.2 42.8 5.1 1.4.8 1.8 2.6 1 4m.4-10.8c-12.3-7.3-32.6-8-44.3-4.4-1.9.6-3.9-.5-4.4-2.4-.6-1.9.5-3.9 2.4-4.4 13.5-4.1 35.9-3.3 50 5.1 1.7 1 2.3 3.2 1.2 4.9-1 1.7-3.2 2.2-4.9 1.2M103.7 35.2c-6.6-1.6-7.8-2.7-7.8-5 0-2.2 2.1-3.7 5.1-3.7 3 0 5.9 1.1 9 3.4.1.1.2.1.3.1.1 0 .2-.1.3-.2l3.2-4.5c.1-.2.1-.4-.1-.6-3.7-2.9-7.8-4.4-12.6-4.4C94 20.3 89 24.6 89 30.7c0 6.5 4.3 8.9 11.7 10.7 6.3 1.5 7.4 2.7 7.4 4.8 0 2.4-2.2 3.9-5.6 3.9-3.8 0-7-1.3-10.5-4.3-.1-.1-.2-.1-.3-.1-.1 0-.2.1-.3.2l-3.6 4.3c-.2.2-.1.4 0 .6 4.1 3.6 9.1 5.6 14.5 5.6 7.7 0 12.6-4.2 12.6-10.7.1-5.5-3.1-8.5-11.2-10.5M132.4 28.7c-3.3 0-6 1.3-8.3 4v-3c0-.2-.2-.4-.4-.4h-5.9c-.2 0-.4.2-.4.4v33.5c0 .2.2.4.4.4h5.9c.2 0 .4-.2.4-.4V52.6c2.2 2.5 5 3.8 8.3 3.8 6.2 0 12.4-4.7 12.4-13.8 0-9.1-6.3-13.9-12.4-13.9m5.5 13.8c0 4.6-2.8 7.8-6.9 7.8-4 0-7.1-3.4-7.1-7.8 0-4.5 3-7.8 7.1-7.8 4 0 6.9 3.3 6.9 7.8M160.8 28.7c-7.9 0-14.2 6.1-14.2 13.9 0 7.7 6.2 13.8 14.1 13.8 8 0 14.2-6.1 14.2-13.9 0-7.7-6.2-13.8-14.1-13.8m0 21.7c-4.2 0-7.4-3.4-7.4-7.9s3.1-7.8 7.3-7.8c4.3 0 7.5 3.4 7.5 7.9 0 4.6-3.1 7.8-7.4 7.8M191.9 29.2h-6.5v-6.6c0-.2-.2-.4-.4-.4h-5.9c-.2 0-.4.2-.4.4v6.6h-2.8c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h2.8v13.1c0 5.3 2.6 8 7.8 8 2.1 0 3.9-.4 5.5-1.4.1-.1.2-.2.2-.4v-4.8c0-.1-.1-.3-.2-.4-.1-.1-.3-.1-.4 0-1.1.6-2.2.8-3.5.8-1.9 0-2.7-.9-2.7-2.8v-12h6.5c.2 0 .4-.2.4-.4v-5.1c0-.3-.2-.5-.4-.5M214.5 29.3v-.8c0-2.4.9-3.5 3-3.5 1.2 0 2.2.2 3.3.6.1 0 .3 0 .4-.1.1-.1.2-.2.2-.4v-5c0-.2-.1-.4-.3-.4-1.2-.3-2.7-.7-4.9-.7-5.4 0-8.3 3.1-8.3 8.9v1.2H205c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h2.8v20.2c0 .2.2.4.4.4h5.9c.2 0 .4-.2.4-.4v-20h5.5l8.4 20.2c-1 2.1-1.9 2.5-3.2 2.5-1 0-2.1-.3-3.2-.9-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3.2l-2 4.4c-.1.2 0 .4.2.6 2.1 1.1 4 1.6 6.3 1.6 4.4 0 6.8-2 8.9-7.5L245 29.9c.1-.1 0-.3 0-.4-.1-.1-.2-.2-.4-.2h-6.1c-.2 0-.3.1-.4.3l-6.3 18-6.9-18c-.1-.2-.2-.3-.4-.3h-10zM201.4 29.2h-5.9c-.2 0-.4.2-.4.4v25.7c0 .2.2.4.4.4h5.9c.2 0 .4-.2.4-.4V29.7c0-.3-.2-.5-.4-.5M198.5 17.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2M263.1 32.3v23.5h-3.3V32.3h-5.4v-3h5.4v-3.2c0-5.6 3.4-8.5 7.9-8.5 1.4 0 2.4.3 3 .6v3c-.5-.2-1.3-.4-2.5-.4-2.7 0-5 1.4-5 5.6v3h7.4v3h-7.5zM269.8 42.6c0-8.3 5.7-13.9 13.1-13.9 7.4 0 13.1 5.6 13.1 13.9s-5.8 13.9-13.1 13.9-13.1-5.6-13.1-13.9M283 53.5c5.2 0 9.8-4 9.8-10.9s-4.5-10.9-9.8-10.9c-5.2 0-9.8 4-9.8 10.9s4.6 10.9 9.8 10.9M313.1 32.8c-.6-.2-1.4-.3-2.3-.3-4.5 0-7.8 2.9-7.8 8.9v14.4h-3.3V29.3h3.3v4.9c1.6-3.7 4.7-5.3 8.2-5.3.9 0 1.6.1 2.1.3v3.6zM363.1 32.8c-.6-.2-1.4-.3-2.3-.3-4.5 0-7.8 2.9-7.8 8.9v14.4h-3.3V29.3h3.3v4.9c1.6-3.7 4.7-5.3 8.2-5.3.9 0 1.6.1 2.1.3v3.6zM363.9 49c0-4.5 3.1-7.1 7.9-7.8l7-1.1c2.3-.3 2.8-1.3 2.8-2.6 0-3.5-2.3-6-6.7-6-4.2 0-7 2.3-7.4 6.2l-3.1-.7c.6-5 4.8-8.4 10.5-8.4 6.9 0 10 4.2 10 9.2v13.4c0 2.1.2 3.4.4 4.5H382c-.1-.6-.3-2.4-.3-4.5-1.2 2.5-4.4 5.2-9.2 5.2-5.5.1-8.6-3.6-8.6-7.4m17.8-4v-3c-.2.2-.9.5-1.9.7l-7.4 1.1c-3.1.4-5 2.2-5 5 0 2.4 2 4.8 5.7 4.8 4.9 0 8.6-3.3 8.6-8.6M392.2 55.8h-3.3V29.3h3.2v4.2c1.4-2.8 4.5-4.9 8.6-4.9 6.2 0 9.4 4.4 9.4 9.9v17.2h-3.3V39.1c0-4.2-2.1-7.4-7.2-7.4-4.5 0-7.4 3.8-7.4 8.3v15.8zM434.7 50.6c-1.2 2.7-4.1 5.9-9.3 5.9-7.4 0-12.2-6.1-12.2-14 0-7.8 4.9-13.9 12.2-13.9 5.7 0 8.3 3.4 9.2 5.7V18h3.3v32.7c0 2.8.2 4.8.3 5H435c-.1-.7-.3-2.3-.3-4.2v-.9zm-9 2.9c5.5 0 9-4.8 9-11 0-6.3-3.5-10.9-8.9-10.9-5.5 0-9.2 4.5-9.2 10.9 0 6.2 3.5 11 9.1 11M444.7 47.8c.5 3.2 2.9 5.8 7.3 5.8 3.3 0 5.9-1.9 5.9-4.7 0-2.4-1.7-3.8-4.5-4.4l-4.3-1c-3.9-.9-6.5-3.2-6.5-7 0-4.3 4.1-7.8 8.9-7.8 6.2 0 8.8 3.7 9.5 6.8l-2.9 1.1c-.5-2.6-2.3-5-6.5-5-3 0-5.7 1.9-5.7 4.7 0 2.3 1.4 3.6 4.2 4.2l4.2.9c4.4 1 6.9 3.5 6.9 7.3 0 3.9-3.3 7.8-9.2 7.8-6.5 0-9.8-4.2-10.3-7.7l3-1z" className="st0"></path></svg>
                    <Profile />
                </div>
            </nav>
        );
    }
}

class SideNav extends React.Component {


    render() {

        return (
            <div className="sidenav">
                <div>Your Favorites</div>
                <div>Streaming Habits</div>
                <div>Listening Insights</div>
                <div>Contact Us</div>
            </div>
        )

    }

}


class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div className="profileContainer">
                <div className="textProfile">
                    <div className="profileName">Rodrigo Zea</div>
                    <div className="profileOptions">
                        <a className="hoverProfile"> Share </a>
                        |
                        <a className="hoverProfile"> Logout </a>
                    </div>
                </div>
                <div>
                    <img className="profilePic" src="../../resources/img/user-placeholder.jpg"></img>
                </div>
            </div>
        )

    }
}


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div className="header">
                <h1>Let's Start With Your Favorites</h1>
                <h2>Get ready to feel cool. Or much less cool than you thought.</h2>
            </div>
        )

    }
}

class Favorites extends React.Component {
    render() {
        return (
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
        );
    }
}

class FavoriteCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const image = {
            backgroundImage: `url(${this.props.imgPath})`
        }


        return (
            <div className={this.props.classN}>
                <div className="cardImage" style={image}>
                </div>
                <div className="cardDetails">
                    <h2>{this.props.topText}</h2>
                    <h3>{this.props.artist}</h3>
                    <p>{this.props.song}</p>

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
                <div className="cardBackground">
                </div>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));