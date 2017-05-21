import React from 'react';
import '../styles/Life.css'
import profilePic from '../images/marco.jpg'
// import App from './App'

export const Life = () => (
    <div className="Life">
        <div className="title">Make. Break. Repeat.</div>
        <div className="image-description">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Il3RtJ1DfE4"><img src={profilePic} alt="Profile"/></a>
            <div className="story">
                <p>Ciao! I’m Marco and I love to build products that help people in their everyday lives. They call this the art of Product Management in the rehalm of tech companies.</p> 
                <p>Coding used to be a hobby when I was studying Economics in undergraduate and became my primary occupation when I converted to CS at <a target="_blank" rel="noopener noreferrer" href="http://www.ucl.ac.uk/">UCL</a>. 
                So while I look for a new hobby, I spend my time <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/marcogreselin/videos/vb.1424364048/10211475287784227/">traveling</a>, finding <a target="_blank" rel="noopener noreferrer" href="http://99u.com/articles">inspirations</a> and (design) <a  target="_blank" rel="noopener noreferrer" href="https://vimeo.com/5189134">thinking</a>.</p>
                <p>Oh, and like any good Italian I also love coffee. So if you are in London, <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!">email</a> me and let's meet!</p>
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
                </div>
                </div>
                
            </div>
        </div>
    </div>
)