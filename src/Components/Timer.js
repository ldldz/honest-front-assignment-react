import { useEffect, useState } from 'react';

export default function Timer({ validTime, startTime, setIsTimerEnd }) {
  const endTime = startTime + validTime;

  const [time, setTime] = useState(
    new Date(endTime).getTime() - new Date().getTime()
  );

  useEffect(() => {
    if (endTime > new Date().getTime()) {
      const counter = setInterval(() => {
        const newTime = new Date(endTime).getTime() - new Date().getTime();
        if (newTime < 0) {
          setIsTimerEnd(true);
          setTime(0);
        } else {
          setTime(newTime);
        }
      }, 1000);

      return () => clearInterval(counter);
    }
  }, [time, startTime]);

  function formatDate(date) {
    const minutes = new Date(date).getMinutes().toString();
    const seconds = new Date(date).getSeconds().toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  return <div className="timer">{formatDate(time)}</div>;
}
