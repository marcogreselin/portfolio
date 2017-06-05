import React, { Component } from 'react';
import '../styles/About.css'
import profilePic from '../images/marco.jpg'
import TypeWriter from 'react-typewriter'

export class About extends Component {

    componentDidMount = () => {
        document.title = "Who's Marco?"
        window.scrollTo(0, 0)
    }
    
    render() {
        return(
            <div className="About">
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Il3RtJ1DfE4"><img src={profilePic} alt="Profile"/></a>
                <div className="title"><TypeWriter fixed={true} delayMap={[{at: 5, delay: 700}, {at: 11, delay: 700}]} initDelay={100} typing={1}>Make. <br/>Break. <br/>Repeat.<br/></TypeWriter></div>
                <div className="image-description">
                    
                    <div className="story">
                        <p>{ this.props.sayHello() }! I’m Marco and I love to build products that help people in their everyday lives. They call this the art of Product Management in the <span className="dont-break">realm of tech companies.</span></p> 
                        <p>Coding used to be a hobby when I was studying Economics in undergraduate and became my primary occupation when I converted to CS at <a target="_blank" rel="noopener noreferrer" href="http://www.ucl.ac.uk/">UCL</a>. 
                        So while I look for a new hobby, I spend my time <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/marcogreselin/videos/vb.1424364048/10211475287784227/">traveling</a>, finding <a target="_blank" rel="noopener noreferrer" href="http://99u.com/articles">inspirations</a><span className="dont-break"> and (design) <a  target="_blank" rel="noopener noreferrer" href="https://vimeo.com/5189134">thinking</a>.</span></p>
                        <p>Oh, and like any good Italian I also love coffee. So if you are in London, <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!">email</a> me <span className="dont-break">and let's meet!</span></p>
                        <div className="row">
                            <div className="two take">
                                <div className="title">Some of the people I worked with</div>
                                <div className="list">
                                    <ul>
                                        <li>Jan - May 17: Resident @ AKQA</li>
                                        <li>Sept - Dec 16: Resident @ EF</li>
                                        <li>Jun - Sept 15: Intern @ YouTube</li>
                                        <li>Feb 14 - Feb 15: BI @ Rocket Internet</li>
                                        <li>Jul - Aug 13: Intern @ Skype</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="two receive">
                                <div className="title">Contacts</div>
                                <div className="list">
                                    <ul>
                                        <li><a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!">marcogreselin@me.com</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marcogreselin/">linkedin.com/in/marcogreselin</a></li>
                                    </ul>
                                </div>
                            </div>{/*two receive*/}
                        </div>{/*row*/}  
                    </div>{/*image description*/}  
                </div>{/*life*/}  
            </div>  
        )
    }
}