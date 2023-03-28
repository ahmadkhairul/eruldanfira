import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

import Animated from '../../Components/animated';

const Completionist = () => <span>Acara sudah selesai</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Animated className="stdcontainer">
        <p>Save The Date</p>
        <p>Sabtu, 24 Juni 2023</p>
        <div className="countdowntimer">
          <div>
            <p>{days}</p>
            <p>hari</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{hours}</p>
            <p>jam</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{minutes}</p>
            <p>menit</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{seconds}</p>
            <p>detik</p>
          </div>
        </div>
      </Animated>
    );
  }
};

function SaveTheDate() {

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="container savethedate">
      <img src="/static/images/gallery (7).jpg" alt="" />
      <Countdown
        date={'2023-06-24T09:00:00'}
        renderer={renderer}
      />
    </div>
  )
}

export default SaveTheDate;
