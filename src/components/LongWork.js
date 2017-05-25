import React, { Component } from 'react'
import fitvids from 'fitvids'

export class LongWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.routeState.minutes,
            interests: {
                business: this.props.routeState.interests.business,
                code: this.props.routeState.interests.code,
                design: this.props.routeState.interests.design
            }
        }
    }

    componentDidMount = () => {
        fitvids()
    }

    render() {
        return(
            <div className="LongWork">
                {fitvids()}
                <div className="subtitle"><span className="subtitle-span">The first advertising banner with video calls</span></div>
                <div className="title">AdCall: Bringing WebRTC to display ads</div>
                
                <div className="productText">
                    AdCall is a concept for a new kind of online advertising banner. Using WebRTC, it allows for a click to call action with the aim of increasing conversions. It's built with a Node backend and deployed on Heroku.
                </div>

                 <img className="productImage" src="https://firebasestorage.googleapis.com/v0/b/portfolio-4c18e.appspot.com/o/kitchen.jpg?alt=media&token=36f0c0b4-9507-4330-9683-6a1239daf9f6" alt="Marco pitching"/>
                <div className="emphasisTitle">
                    <span className="emphasisTitleSpan">The idea</span>
                </div>

                <div className="productVideo">
    <iframe title='AdCall' width='560' height='315' src='https://www.youtube.com/embed/3ZDOA5haCeY?rel=0&amp;showinfo=0&amp;start=155' frameBorder='0' allowFullScreen></iframe>
                </div>

                <div className="productText">
                    AdCall is a concept for a new kind of online advertising banner. Using WebRTC, it allows for a click to call action with the aim of increasing conversions. It's built with a Node backend and deployed on Heroku.
                </div>


                <div className="productLinks">
                    <div className="passwordProtected">
                        Some files are password protected. <span className="dont-break"><a href="mailto:marcogreselin@me.com?subject=Unlock the magic" className="social" rel="noopener noreferrer">Email</a> me to unlock them.</span>
                    </div>
                    <ul>
                        <li><a href="http://github.com">Github</a></li>
                        <li><a href="http://github.com">Github</a></li>
                    </ul>
                </div>


                <button className="see-more">See some more</button>
            </div>
        )
    }
}