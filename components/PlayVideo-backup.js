import React from 'react'
import '../App.css';
import Button from './Button';
import './PlayVideo.css';

function PlayVideo() {
  return (
    <>
    <div className="home-container">
        <video autoPlay loop muted >
          <source src="./videos/video-2.mp4" type="video/mp4" />
        </video>
        <h1>MY LITTLE ADVENTURE</h1>
        <p>Explore the world of the planet</p>
        <br></br>
        <div className="home-btn">
            <Button className="btns" buttonStyle="btn--outline"
                    buttonSize="btn-large" >GET STARTED
            </Button>
            <Button className="btns" buttonStyle="btn--primary"
                    buttonSize="btn-large" >WATCH TRAILER
                    <i className="far fa-play-circle"/>
            </Button>
        </div>
    </div>
    </>
  )
}

export default PlayVideo;