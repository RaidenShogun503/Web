import React from 'react';
import { Player } from 'video-react';

const BackgroundVideo = ({ videoUrl }) => {
  return (
    <div className="background-video">
      <Player
        playsInline
        autoPlay
        muted
        loop
        src={videoUrl} // Thay thế YuukaStory1.mp4 bằng videoUrl
      />
    </div>
  );
};

export default BackgroundVideo;
