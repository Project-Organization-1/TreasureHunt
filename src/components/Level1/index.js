import React from "react";
import Level from "../Level/index";
function index() {
  const clue = "Level1";
  const imgPath = "/images/camp-karnala-1.jpeg";
  const videourl = "https://www.youtube.com/embed/REWoh-3yt28";
  return (
    <div>
      <Level img1True img1Path={imgPath} videoTrue videourl={videourl} />
    </div>
  );
}

export default index;
