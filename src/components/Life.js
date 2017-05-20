import React from 'react';
import '../styles/Life.css'
import profilePic from '../images/marco.jpg'
import { Link } from 'react-router-dom'
// import App from './App'

const Life = () => (
    <div className="Life">
        <img src={profilePic} alt="Profile"/>
        <div className="story">
            <Link to="/">back</Link>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>
)




export default Life