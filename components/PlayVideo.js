/*
import React from 'react'
import '../App.css';
import Button from './Button-backup';
import './PlayVideo.css';
import thisV from "../videos/video-9.mp4";
import './Button.css';


function PlayVideo() {
  return (
    <>
     <div className="home-container">
        <h1>EXPLORE THE WORLD OF FREEDOM</h1>
        <p>CLICK TO THE NEW WORLD</p>
        <video src={thisV} autoPlay loop muted />
        <div className='home-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>

          <Button
            className='btn'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </>
  )
}

export default PlayVideo;

*/

import React from 'react'
import '../App.css';
import  Button from './Button';
import './PlayVideo.css';
import thisV from "../videos/video-9.mp4";
import './Button.css';


function PlayVideo() {
  return (
    <div className='home-container'>
      <video src={thisV} autoPlay loop muted />
      <h1>EXPLORE THE WORLD OF FREEDOM</h1>
      <p>CLICK TO LEARN MORE</p>
      <div className='home-btns'>
        <Button
          className='btn-any'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btn-any'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <i className='far fa-play-circle' /> OUR UNIVERSE 
        </Button>
      </div>
    </div>
  );
}

export default PlayVideo;