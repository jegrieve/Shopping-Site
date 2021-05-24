import React, {useEffect, useState} from 'react';

const CountDown = (props) => {
    const getTimeLeft = () => {
        let date = new Date();
        let hours = (date.getHours() === 24 ? 24 - date.getHours() : 23 - date.getHours());
        let min = 60 - date.getMinutes();
        let sec = 60 - date.getSeconds();
        return `${hours}:${min}:${sec}`;
    } //bug ex 8:60:60
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())
    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(getTimeLeft());
          }, 1000);
          return () => clearTimeout(timer);
    })

  return <div>{timeLeft}</div>;
};

export default CountDown;
