import React from "react"
import ReactDOM from "react-dom"
import './styles/main.scss'

import Navbar from './Navbar/Navbar.js'
import SideNav from './SideNav/SideNav.js'
import MainContainer from './MainContainer/MainContainer.js'
import Footer from './Footer/Footer'
class App extends React.Component {
    constructor(props) {
        super(props)

        this.classListF = ['favorites', 'habits', 'insights']

        this.state = {
            activeSection: 'favorites'
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset < 1250) {
                this.setState({ activeSection: 'favorites' })
            }
            else if (window.pageYOffset > 1250 && window.pageYOffset < 4400) {
                this.setState({ activeSection: 'habits' })
            }
            else if (window.pageYOffset > 4400) {
                this.setState({ activeSection: 'insights' })
            }
        }
    }

    render() {
        const classN = this.state.activeSection



        return (
            <div className="appContainer">
                {this.classListF.map(ClassNN => {

                    return (
                        <div className={`${ClassNN} ${(ClassNN === classN) ? 'active' : ' '}`}>

                        </div>

                    )

                }
                )

                }
                <Navbar activeSection={this.state.activeSection} />
                <SideNav />
                <MainContainer />
                <Footer />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector("#root"))
