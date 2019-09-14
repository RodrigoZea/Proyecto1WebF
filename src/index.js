import React from "react";
import ReactDOM from "react-dom";
import './styles/main.scss';

function App() {
    return <Header />;
};

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <div>
                <h1>Let's Start With Your Favorites</h1>
                <h2>Get ready to feel cool. Or much less cool than you thought.</h2>
            </div>
        )

    }

}

ReactDOM.render(<App />, document.querySelector("#root"));