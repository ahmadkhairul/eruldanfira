import React, { useState } from 'react';
import { TbMusic, TbMusicOff } from "react-icons/tb";

function FloatingMusic() {
  const [play, setPlay] = useState(true);

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  return (
    <div className="icon-music">
      <audio id="myAudio" loop>
        <source src="/static/music/PerhapsLove.MP3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div onClick={toggleMusic}>
        {play ? <TbMusic /> : <TbMusicOff />}
      </div>
    </div>
  );
}

export default FloatingMusic;
