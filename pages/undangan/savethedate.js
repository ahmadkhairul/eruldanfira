import { useRef, useState, useEffect } from 'react';
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
        <p>Minggu, 18 Februari 2024</p>
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
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHasMounted(true);
    setHeight(ref.current?.clientHeight)
  }, []);

  if (!hasMounted) return (
    <div style={{ height }}>
      <div className="container savethedate" ref={ref} />
      <div className="background-images" style={{ height, bottom: height }} />
    </div>
  );

  return (
    <div style={{ height }}>
      <div className="container savethedate" ref={ref}>
        <Countdown
          date={'2024-02-18T09:00:00'}
          renderer={renderer}
        />
      </div>
      <div className="background-images" style={{ height, bottom: height }} />
    </div>
  )
}

export default SaveTheDate;
