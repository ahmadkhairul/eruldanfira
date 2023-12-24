import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.getElementById('myAudio').play().catch((error) => {
      document.addEventListener('click', () => {
        document.getElementById('myAudio').play()
      }, { once: true })
    })
  },[])

  return (
      <div className="icon-music">
        <audio id="myAudio" loop autoPlay>
          <source src="/static/music/music-gemblung.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          {play ? <TbMusic /> : <TbMusicOff />}
        </div>
      </div>
    );
  }

  export default FloatingMusic;
