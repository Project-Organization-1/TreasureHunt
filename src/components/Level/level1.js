import React from 'react'
import ClueComponent from './Clue/ClueComponent';
import SubmitBoxComponent from './SubmitBox/SubmitBoxComponent';
import ImageComponent from './Image/ImageComponent';
import VideoComponent from './Video/VideoComponent';

function Level1() {
    const imgPath = "/images/camp-karnala-1.jpeg";
    const videourl = "https://www.youtube.com/embed/REWoh-3yt28";
    const clue = "Level1";
    return (
        <div>
            <SubmitBoxComponent />
            <ImageComponent imgPath ={imgPath} />
            <ClueComponent  clue = {clue}/>
            <VideoComponent videourl={ videourl}/>
        </div>
    )
}

export default Level1;