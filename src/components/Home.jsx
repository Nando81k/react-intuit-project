import React from 'react';
import './Home.css';
import audioUrl from '../assets/GMT20250307-210107_Recording.mp4'; // adjust the file name/path as needed

const Home = () => {

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Delving Into Intuit</h1>
                <div className="audio-container">
                    <span className="audio-text">Play Interview Audio:</span>
                    <audio controls className="audio-player">
                        <source src={audioUrl} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </section>
    );
};

export default Home;
